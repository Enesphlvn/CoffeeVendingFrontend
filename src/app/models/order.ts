export interface Order{
    id: number;
    userId: number;
    userName: string;
    productId: number;
    productName: string;
    amountPaid: number;
    refundPaid: number;
}