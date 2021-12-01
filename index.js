const employee = {
    name: 'Amy',
    streetAddress: '11 Highway',
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const object = {...employee};
    object["name"] = 'Sam';
    object["streetAddress"] = '11 Broadway';
    return object;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = 'Sam';
    employee.streetAddress = '12 Broadway';
    return employee;
};

function deleteFromEmployeeByKey(employee, key, value) {
    const object = {...employee};
    delete object.name;
    return object;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee.name;
    return employee;
}