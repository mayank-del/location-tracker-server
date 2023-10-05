const { Locn } = require("./locn");
const router = require("express").Router();
const axios=require("axios");
const { Locn2 } = require("./locn2");
router.post("/get", async (req, res) => {
    let datas={network:"",org:"",ip:"",postal:"",region:"",address_line1:"",address_line2:"",city:"",country:""}
    
    
    await axios
    .get(
      'https://ipapi.co/json'
    )
    .then((firstRes) => {
      // Handle the response from the first Axios request
      //console.log(firstRes);
        datas["network"]=firstRes.data.network
        datas["org"]=firstRes.data.org
        datas["ip"]=firstRes.data.ip
        datas["postal"]=firstRes.data.postal
        datas["region"]=firstRes.data.region
        datas["latitude"]=firstRes.data.latitude
        datas["longitude"]=firstRes.data.longitude
    })

    await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${datas.latitude}&lon=${datas.longitude}&apiKey=5568cf47022b4308a3e705987a8b12e3`).then((secondRes)=>{
        datas["address_line1"]=secondRes.data.features[0].properties.address_line1,
        datas["address_line2"]= secondRes.data.features[0].properties.address_line2,
        datas ["city"]= secondRes.data.features[0].properties.city,
        datas["country"]= secondRes.data.features[0].properties.country
    })

        
  //console.log(datas);
      // Third Axios request using data from the second request
    //await axios.post("http://localhost:5000/api/get", datas);

  await new Locn({
    address_line1: datas.address_line1,
    address_line2: datas.address_line2,
    city: datas.city,
    country: datas.country,
    network: datas.network,
    org: datas.org,
    ip: datas.ip,
    postal: datas.postal,
    region: datas.region,
  }).save();
  res.status(200).send("go to next step")
});


router.post("/secondapi",async(req,res)=>{
    const {address_line1,address_line2,city,country}=req.body
    await new Locn2({
        address_line1: address_line1,
        address_line2: address_line2,
        city: city,
        country: country,
    }).save();
    res.status(200).send("data recieved successfully.....")
})

module.exports = router;
