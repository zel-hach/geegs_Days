const { addDays, format } = require('date-fns');



function FormattedDate(){
    const currentDate = new Date();
    
    const futureDate = addDays(currentDate, 5);
    
    const formattedDate = format(futureDate, 'yyyy-MM-dd HH:mm:ss');
    
    console.log("Formatted Date:", formattedDate);
}

module.exports = {FormattedDate}