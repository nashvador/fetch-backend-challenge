function calculateRecieptPoints(reciept: any): number {
  let totalPoints = 0;

  function alphanumericPoints(): number {
    return reciept.retailer.replace(/[^a-zA-Z0-9]/g, "").length;
  }

  function isWholeNumber(): number {
    return reciept.total % 1 === 0 ? 50 : 0;
  }

  function isMultiple(): number {
    return reciept.total % 0.25 === 0 ? 25 : 0;
  }

  function isTwoItems(): number {
    return Math.floor(reciept.items.length / 2) * 5;
  }

  function trimmedLengthPoints(): number {
    let points = 0;
    reciept.items.forEach((item: any) => {
      const trimmedLength = item.shortDescription.trim().length;
      if (trimmedLength % 3 === 0) {
        points += Math.ceil(parseFloat(item.price) * 0.2);
      }
    });
    return points;
  }

  function isOddDate(): number {
    const purchaseDate = new Date(reciept.purchaseDate);
    return purchaseDate.getDate() % 2 !== 0 ? 6 : 0;
  }

  function isSpecificTime() {
    const purchaseTime = reciept.purchaseTime.split(":");
    const hour = parseInt(purchaseTime[0], 10);
    return hour >= 14 && hour < 16 ? 10 : 0;
  }

  totalPoints =
    alphanumericPoints() +
    isWholeNumber() +
    isMultiple() +
    isTwoItems() +
    trimmedLengthPoints() +
    isOddDate() +
    isSpecificTime();

  return totalPoints;
}

export { calculateRecieptPoints };
