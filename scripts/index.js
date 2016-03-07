currentAge = prompt('What is your current age?')

retirementAge = prompt('At what age would you like to retire?')

retirementTime = retirementAge - currentAge;

today = new Date().getFullYear();

retirementYear = today + parseFloat(retirementTime);

document.write('<p>You have ' + retirementTime + ' years until you can retire.</p><p>It\'s ' + today + ', so you can retire in ' + retirementYear + '.')


