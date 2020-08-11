
lesdsadw();


function lesdsadw() {
  var data = [
    { userId: 8, title: 'title1' },
    { userId: 11, title: 'other' },
    { userId: 15, title: null },
    { userId: 19, title: 'title2' }
  ];

  //查找data中，符合条件的数据，并进行排序
  var result = find(data).where({
    "title": /\d$/
  }).orderBy('userId', 'desc');


  var find = function (origin) {

    return {
      where: function (findObj) {
        const results = [];
        let key = Object.keys(findObj);
        let rexp = findObj[key];
        origin.forEach((item, index) => {
          if (rexp.test(item[key])) {
            results.push(item);
          }
        });
        return {
          orderBy: function (key, order) {
            results.sort((item1, item2) => {
              if (order == 'desc') {
                return item2[key] - item1[key];
              } else {
                return item1[key] - item2[key];
              }

            });
            return results;
          }
        };
      }
    };
  };
}

