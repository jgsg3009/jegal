import 'dart:math'

int movie(int card, int ticket, double perc) {
  
  int n = (card / ticket).ceil();
  int ticketPrice = card + (ticket*perc*(1-perc^n)/()).ceil();
  int nonTicketPrice = ticket*n;
  do {
    

  } while(n > 1);

  return n;
}

void main() {}
