class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function () {
  console.log(
    `[TICKET] Movie: ${this.movieName} | Seat: ${this.seatNo} | Base Price: ₹${this.price}`
  );
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

const bookedTicket = new OnlineTicket("Interstellar", "G-14", 350, 45);

bookedTicket.printTicket();
console.log(`Total Amount Payable (incl. convenience fee): ₹${bookedTicket.getTotalAmount()}`);
