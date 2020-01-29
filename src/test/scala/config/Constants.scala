package test.scala.config

import com.typesafe.config._
import io.gatling.core.Predef._
import io.gatling.http.Predef._

object Constants {

  val conf = ConfigFactory.load("app.properties")

  //Appllication Details
  val baseUrl = conf.getString("baseUrl")
  val appId = conf.getString("appId")
  val appKey = conf.getString("appKey")

  //Scenario details
  val repeatTimes = conf.getString("repeat").toInt
  val pause = conf.getString("pausebetweenRequestsMs").toInt
  val pace = conf.getString("paceInMs").toInt
  val isDebug = conf.getString("isDebug").toBoolean

  //Simulation details
  val httpProtocol = http.baseUrl(baseUrl)

  //Hotel scenario details
  val hotelcsvFeeder = csv(conf.getString("hotelDataFile"))


}
