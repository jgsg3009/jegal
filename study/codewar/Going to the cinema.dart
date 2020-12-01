import 'dart:math';

int movie(int card, int ticket, double perc) {
  int n = (card / ticket).ceil();
  double perPowN = pow(perc, n);
  int cardPrice = card + (ticket * perc * (1 - perPowN) / (1 - perc)).ceil();
  int nonCardPrice = ticket * n;
  int diff = cardPrice - nonCardPrice;
  do {
    int stepN = (diff / ticket).ceil();
    n += stepN;
    perPowN *= pow(perc, stepN);
    cardPrice = card + (ticket * perc * (1 - perPowN) / (1 - perc)).ceil();
    nonCardPrice = ticket * n;
    diff = cardPrice - nonCardPrice;
    if (diff == 0) {
      n += 1;
      perPowN *= perc;
    }
  } while (diff >= 0);
  return n;
}

void main() {
  print(movie(500, 15, 0.9));
  print(movie(100, 10, 0.95));
  print(movie(0, 10, 0.95));
  print(movie(250, 20, 0.9));
  print(movie(500, 20, 0.9));
}
