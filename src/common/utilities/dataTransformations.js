import moment from 'moment';

export const processDateAttributes = (obj, attributes) => {
    attributes.forEach(attribute => {
        if (obj.hasOwnProperty(attribute)) {
            const momentDate = moment(obj[attribute]);
            obj[attribute] = momentDate.isValid() ? momentDate.toDate() : obj[attribute];
        }
    })
}
