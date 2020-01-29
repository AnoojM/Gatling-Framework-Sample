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
        "total": "508",
        "ok": "615",
        "ko": "508"
    },
    "maxResponseTime": {
        "total": "4116",
        "ok": "4116",
        "ko": "566"
    },
    "meanResponseTime": {
        "total": "1302",
        "ok": "1578",
        "ko": "543"
    },
    "standardDeviation": {
        "total": "958",
        "ok": "982",
        "ko": "24"
    },
    "percentiles1": {
        "total": "851",
        "ok": "1251",
        "ko": "549"
    },
    "percentiles2": {
        "total": "1749",
        "ok": "1972",
        "ko": "565"
    },
    "percentiles3": {
        "total": "2898",
        "ok": "3246",
        "ko": "566"
    },
    "percentiles4": {
        "total": "3872",
        "ok": "3942",
        "ko": "566"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3,
        "percentage": 20
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 7
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7,
        "percentage": 47
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
        "total": "508",
        "ok": "615",
        "ko": "508"
    },
    "maxResponseTime": {
        "total": "4116",
        "ok": "4116",
        "ko": "566"
    },
    "meanResponseTime": {
        "total": "1302",
        "ok": "1578",
        "ko": "543"
    },
    "standardDeviation": {
        "total": "958",
        "ok": "982",
        "ko": "24"
    },
    "percentiles1": {
        "total": "851",
        "ok": "1251",
        "ko": "549"
    },
    "percentiles2": {
        "total": "1749",
        "ok": "1972",
        "ko": "565"
    },
    "percentiles3": {
        "total": "2898",
        "ok": "3246",
        "ko": "566"
    },
    "percentiles4": {
        "total": "3872",
        "ok": "3942",
        "ko": "566"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 3,
        "percentage": 20
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 7
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7,
        "percentage": 47
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
