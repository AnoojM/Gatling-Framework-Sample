package test.scala.scenario

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.core.feeder.FeederBuilder

import test.scala.config.Constants
import test.scala.request._


object Scenarios {

  def createScenario(name: String, feed: FeederBuilder, chains: ChainBuilder*): ScenarioBuilder = {

    if (Constants.repeatTimes > 2) {
      scenario(name).feed(feed).repeat(Constants.repeatTimes) {
        pace(Constants.pace).exec(chains).pause(Constants.pause)
      }
    } else {
      scenario(name).feed(feed).forever() {
        pace(Constants.pace).exec(chains).pause(Constants.pause)
      }
    }
  }

  val clearCache = exec(flushHttpCache)
  val clearCookies = exec(flushCookieJar)

  val scnHotelDetails = createScenario("SCN_HOTEL_DETAILS", Constants.hotelcsvFeeder.circular, HotelRequests.getHotelList, HotelRequests.getHotelDetails)
  val scnHotelList = createScenario("SCN_HOTEL_LIST", Constants.hotelcsvFeeder.circular, HotelRequests.getHotelList)
}
