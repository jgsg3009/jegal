import 'dart:math'

int movie(int card, int ticket, double perc) {
  
  int n = (card / ticket).ceil();
  int ticketPrice = card + (ticket*perc*(1-perc.pow(n))/(1-perc)).ceil();
  int nonTicketPrice = ticket*n;
  int diff = ticketPrice - nonTicketPrice

  do {
    

  } while(diff > 0);

  return n;
}

void main() {}
