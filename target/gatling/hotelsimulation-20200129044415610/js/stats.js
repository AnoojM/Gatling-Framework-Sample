var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15",
        "ok": "11",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "555",
        "ok": "619",
        "ko": "555"
    },
    "maxResponseTime": {
        "total": "1442",
        "ok": "1442",
        "ko": "602"
    },
    "meanResponseTime": {
        "total": "841",
        "ok": "940",
        "ko": "571"
    },
    "standardDeviation": {
        "total": "299",
        "ok": "292",
        "ko": "19"
    },
    "percentiles1": {
        "total": "722",
        "ok": "843",
        "ko": "563"
    },
    "percentiles2": {
        "total": "948",
        "ok": "1174",
        "ko": "576"
    },
    "percentiles3": {
        "total": "1394",
        "ok": "1408",
        "ko": "597"
    },
    "percentiles4": {
        "total": "1432",
        "ok": "1435",
        "ko": "601"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5,
        "percentage": 33
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 20
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 20
    },
    "group4": {
        "name": "failed",
        "count": 4,
        "percentage": 27
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.714",
        "ok": "0.524",
        "ko": "0.19"
    }
},
contents: {
"req_gethotellist-34388": {
        type: "REQUEST",
        name: "getHotelList",
path: "getHotelList",
pathFormatted: "req_gethotellist-34388",
stats: {
    "name": "getHotelList",
    "numberOfRequests": {
        "total": "15",
        "ok": "11",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "555",
        "ok": "619",
        "ko": "555"
    },
    "maxResponseTime": {
        "total": "1442",
        "ok": "1442",
        "ko": "602"
    },
    "meanResponseTime": {
        "total": "841",
        "ok": "940",
        "ko": "571"
    },
    "standardDeviation": {
        "total": "299",
        "ok": "292",
        "ko": "19"
    },
    "percentiles1": {
        "total": "722",
        "ok": "843",
        "ko": "563"
    },
    "percentiles2": {
        "total": "948",
        "ok": "1174",
        "ko": "576"
    },
    "percentiles3": {
        "total": "1394",
        "ok": "1408",
        "ko": "597"
    },
    "percentiles4": {
        "total": "1432",
        "ok": "1435",
        "ko": "601"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5,
        "percentage": 33
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 20
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 20
    },
    "group4": {
        "name": "failed",
        "count": 4,
        "percentage": 27
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.714",
        "ok": "0.524",
        "ko": "0.19"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
