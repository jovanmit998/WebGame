import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable, pluck, from, mergeMap, toArray, of, catchError, EMPTY, BehaviorSubject, distinct, tap } from 'rxjs';
import { Country, Sports } from 'src/models/api.models';
import { allRoutes } from '../app-routing.module';
import helperData from './helper-data.json';

const allFlags = ['germanFlag', 'chineseFlag', 'spainFlag', 'brazilFlag'];

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  private usersBirthDay: number;
  unlockedRoutes = new Set<string>();
  readonly sexPlaces = [
    'Bed',
    'Car',
    'Amusement  Park',
    'Bush',
    'Public transport',
    'Library',
    'Bathroom',
    'Wardrobe',
    'Pet shop',
    'None of the above'
  ];
  readonly getAllCountries$ = this.http.get<Country[]>('https://restcountries.com/v3.1/all').pipe(select);
  readonly getAllSports$ = this.http.get<Sports[]>('https://sports.api.decathlon.com/').pipe(select);
  readonly currentRoute$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    pluck('url'),
    map(url => url.toString().slice(1))
  );

  constructor(private router: Router, private http: HttpClient) {
    this.initializeUnlockedRoutes()
    this.fillVisitedRoutes().subscribe();
  }

  get BirthDay() {
    return this.usersBirthDay;
  }

  set BirthDay(day) {
    this.usersBirthDay = day;
  }

  getHelperText(): Observable<string[]> {
    const currentRoute = this.router.url.slice(1);
    return of(helperData).pipe(
      map(helperData => helperData[currentRoute])
    )
  }

  getCurrentRouteForDialogs(): string {
    return this.router.url.slice(1)
  }

  getCurrentFlag(): Observable<string> {
    return this.currentRoute$.pipe(
      map(route => getFlags().get(route))
    )
  }

  getHighlightedFlag(): string {
    const currentRoute = this.router.url.slice(1);
    return getFlags().get(currentRoute)
  }

  openRouteForFlag(flag: string) {
    for(let [key, value] of getFlags()) {
      if(value === flag) {
        this.router.navigate(['/' + key])
        break;
      }
    }
  }

  private fillVisitedRoutes(): Observable<Set<string>> {
    return this.currentRoute$.pipe(
      distinct(),
      filter(route => route !== ''),
      map(route => this.unlockedRoutes.add(getFlags().get(route))),
      tap(this.saveUnlockedRoutesInLocalStorage)
    )

  }

  private saveUnlockedRoutesInLocalStorage(routes: Set<string>) {
      const unlockedRoutes = Array.from(routes)
      localStorage.setItem('unlockedRoutes', unlockedRoutes.toString());
  }

  private initializeUnlockedRoutes() {
    const flags = localStorage.getItem('unlockedRoutes')?.split(',')
    if(!flags) return

     for(let flag of flags) {
       this.unlockedRoutes.add(flag)
     }
  }
}

function getFlags() {
  const flags = new Map();
  for(const index in allRoutes) {
    flags.set(allRoutes[index], allFlags[index]);
  }

  return flags;
}

function select<T>(source: Observable<any>): Observable<T[]> {
  return source.pipe(
    map(item => from(item?.data ?? item)),
    mergeMap(itemList => itemList
      .pipe(
        map((singleItem: any) => singleItem?.attributes?.name ?? singleItem?.name?.common),
        toArray()
      )
    ),
    catchError(error => EMPTY)
  )
}
