console.log(`-----------------Step - 1------------`);


let sbiBank = {
    bankName : "SBI Bank",
    location : "Pune",
    accountNo : 1234567,
    ifsc : "SBIN0020465",
    interestrate : 5.6,

    showDetails : function(){
        console.log(`Bank Details : Bank Name : ${this.bankName}, A/C No : `);
    }

}
sbiBank.showDetails();
