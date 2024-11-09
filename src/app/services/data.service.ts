import { Injectable, signal } from '@angular/core';
import { experiences } from '@data/experience.data';
import { navLinks } from '@data/navLinks.data';
import { portfolio } from '@data/portfolio.data';
import { IData, INavLinks, IPortfolio } from '@models/data.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public getData = signal<IData>({
    experiences: experiences,
  });

  public getNavLinks = signal<INavLinks[]>(navLinks);
  public getPortfolio = signal<IPortfolio[]>(portfolio);
}
