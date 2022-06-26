/* Your Code Here */
function createEmployeeRecord(employees){
    return{
        firstName: employees[0],
        familyName: employees[1],
        title: employees[2],
        payPerHour:employees[3],
        timeInEvents:[],
        timeOutEvents:[]
    }; 
};
    
function createEmployeeRecords(arr){
    return arr.map((records) =>{
        return  createEmployeeRecord(records)
    })
}
    
function getHour(dateTime){
    return parseInt(dateTime.match(/\d{4}$/)[0])
}

function getDate(dateTime) {
    return dateTime.match(/\d{4}-\d{2}-\d{2}/)[0]
}

function createTimeInEvent(timeIn){
    this.timeInEvents.push({
        type: "TimeIn",
        date: getDate(timeIn),
        hour: getHour(timeIn)
    })
    
    return this;
}
    
function  createTimeOutEvent(timeOut){
    this.timeOutEvents.push({
        type: "TimeOut",
        date: getDate(timeOut),
        hour: getHour(timeOut)
        })
    return this;
}
    
function hoursWorkedOnDate(dates) {
    let timeIn = this.timeInEvents.find(event =>
        event.date == dates)
    let timeOut = this.timeOutEvents.find(event =>
        event.date == dates)
    let totalTime = (timeOut.hour - timeIn.hour) / 100
    return totalTime;
}

function wagesEarnedOnDate(dates) {
    let hours = hoursWorkedOnDate.call(this, dates)
    return this.payPerHour * hours;
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName == firstName)
}

function calculatePayroll(employeeRecord) {
    return employeeRecord.reduce((total, employees) => {
        return total + allWagesFor.call(employees)
    }, 0)
}
    
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

