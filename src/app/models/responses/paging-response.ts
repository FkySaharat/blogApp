export class PagingResponse<T = any> {

    public list: Array<T>;

    public totalItems: number;

    public pageSize: number;

    constructor(data?: Partial<PagingResponse>) {
        if (data) {
            this.cast(data);
        }
    }

    private cast(data: Partial<PagingResponse>) {
        this.list = data.list;
        this.totalItems = data.totalItems;
        this.pageSize = data.pageSize;
    }
}
