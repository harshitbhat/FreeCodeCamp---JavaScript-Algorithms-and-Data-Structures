// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (!(prop === 'tracks' && value === '')) {
    records[id][prop] = value;
  }
  if (value == '') {
    delete records[id][props];
  }
  if (prop === 'tracks') {
    if (!records[prop].hasOwnProperty(prop)) {
      record[id][prop] = [];
      record[id][prop].push(value);
    } else if (value != '') {
      record[id][prop].push(value);
    }
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
