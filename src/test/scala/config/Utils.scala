package test.scala.config

import ch.qos.logback.classic.{Level, LoggerContext}
import org.slf4j.LoggerFactory

object Utils {
  def debugInfo(): Unit = {
    if (Constants.isDebug) {
      val context: LoggerContext = LoggerFactory.getILoggerFactory.asInstanceOf[LoggerContext]
      context.getLogger("io.gattling.hhtp").setLevel(Level.valueOf("TRACE"))
    }
  }

}
