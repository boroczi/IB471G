export interface IEvent {
  id: string;
  name: string;
  location: string;
  startTime: Date;
  endTime: Date;
  description: string;
  totalTickets: number;
  availableTickets: number;
  ticketPrice: number;
}
