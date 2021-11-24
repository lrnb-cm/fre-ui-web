import { state } from '../state/loginState';
import { Subject } from 'rxjs';
import { ObservableRepository } from './ObservableRepository';

export class SimpleRepository implements ObservableRepository<state> {
    private observable: Subject<state[]> = new Subject();
    private data: state[] = [];
    private static instance = new SimpleRepository();

    public static getInstance(): SimpleRepository {
        return this.instance;
    }

    private constructor() {}

    async remove(state: state): Promise<state> {
        this.data = this.data.filter((data: state) => {
            return data.orgid !== state.orgid;
        });
        this.observable.next(this.data);
        return state;
    }

    async add(state: state): Promise<state> {
        this.data.push(state);
        this.observable.next(this.data);

        return state;
    }

    getObservable(): Subject<state[]> {
        return this.observable;
    }

    async getAll() {
        return this.data;
    }

    async removeAll() {
        this.data = [];
        this.observable.next(this.data);
        return this.data;
    }
}