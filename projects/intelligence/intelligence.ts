import { Bar, BarRequest, Depth, Symbol, Ticker, Transaction } from '@dripjs/types';
import { Observable } from 'rxjs';

export abstract class Intelligence {
  abstract getSymbols(): Promise<Symbol[]>;
  abstract getSymbol(symbol: string): Promise<Symbol | undefined>;
  abstract getTicker$(symbol: string): Observable<Ticker>;
  abstract stopTicker(symbol: string): void;
  abstract getBars(request: BarRequest): Promise<Bar[]>;
  abstract getDepth$(symbol: string): Observable<Depth>;
  abstract stopDepth(symbol: string): void;
  abstract getTransactions$(symbol: string): Observable<Transaction>;
  abstract stopTransactions(symbol: string): void;
}
