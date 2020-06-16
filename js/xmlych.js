var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/vip/query';
const account = '/account/queryByParentId';
if (url.indexOf(vip) >=0 || url.indexOf(account) >=0) {
    obj.data.parent["expiryTime"]="2088-12-32 23:59:59";
    obj.data.parent["vipFlag"]= 1;
    obj.data.parent["vipRank"]= 1;
    obj.data.parent["vipType"]= 1;
	body = JSON.stringify(obj);
}

$done({body});
