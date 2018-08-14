export class Spot {
  private _id: number;
  private _name: string;
  private _startDate: Date;
  private _endDate: Date;

  constructor(id, name, startDate, endDate) {
    this._id = id;
    this._name = name;
    this._startDate = startDate;
    this._endDate = endDate;
  }

  public get id(): number {
    return this._id;
  }
  
  public get name(): string {
    return this._name;
  }

  public get startDate(): Date {
    return this._startDate;
  }

  public get endDate(): Date {
    return this._endDate;
  }

}