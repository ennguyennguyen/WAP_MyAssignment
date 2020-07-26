var me = {
  first: "Joe",
  last: "Nguyen",
  getFullName: function(){
      return this.first + " " + this.last;
  }
};

var you = {
  first: "Jennie",
  last: "Kim"
};

console.log(me.getFullName.call(you));