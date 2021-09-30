var deviceReadStream = fs.createReadStream("/football.cs");
var prevData = '';
let aRegex = /^(\d{4})-\d{2}-\d{2},([\w \.-ç]+),([\w \.-ç]+),(\d{1,2})+,(\d{1,2})+.*$/

deviceReadStream.on('data',function(data){
  var buffer = prevData + data;
  if( buffer.match(aRegex) ) {
      
  }
    

  prevData = data;
});