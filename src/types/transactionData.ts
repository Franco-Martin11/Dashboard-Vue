export interface TransactionsData {
 transaction: Transaction[];
}

export interface Transaction {
 amount:      number;
 category:    string;
 date:        Date;
 description: string;
 id:          string;
}
