var currentAge = prompt('What is your current age?')

var retirementAge = prompt('At what age would you like to retire?')

var retirementTime = retirementAge - currentAge;

var today = new Date().getFullYear();

var retirementYear = today + parseFloat(retirementTime);

document.write('<p>You have ' + retirementTime + ' years until you can retire.</p><p>It\'s ' + today + ', so you can retire in ' + retirementYear + '.')


