export const validateDealer = dealer => {
    const validDealers = ["KAI", "TTC"];

    return validDealers.includes(dealer);
};
