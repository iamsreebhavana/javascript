var distance = {
    "destination_addresses": ["Mysuru, Karnataka, India"],
    "origin_addresses": ["Bengaluru, Karnataka, India"],
    "rows": [
        {
            "elements": [
                {
                    "distance": {
                        "text": "150 km",
                        "value": 149894
                    },
                    "duration": {
                        "text": "3 hours 12 mins",
                        "value": 11494
                    },
                    "duration_in_traffic": {
                        "text": "3 hours 17 mins",
                        "value": 11811
                    },
                    "status": "OK"
                }
            ]
        }
    ],
    "status": "OK"
}
function formatter(distance){
    return `the distance from ${distance.origin_addresses[0].split(', ')[0]}to ${distance
        .destination_addresses[0].split(', ')[0]} is ${distance.rows[0].elements[0].distance.text} and 
        the time taken to travel is ${distance.rows[0].elements[0].duration.text} `
 
}
console.log(formatter(distance));
// the distance from bengaluru to mysuru is 150 km and the time taken to travel is 3 hours 12 mins