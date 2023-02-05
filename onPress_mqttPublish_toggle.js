// Initially made for Shelly 2 PLUS with "Button" as Input mode and detached from output.
// Listens for events of both inputs 0/1 (buttons) when pressed ("btn_down").
Shelly.addEventHandler(function(e) {
  if (e.component === "input:0" && e.info.event === "btn_down") {
  // When event arrives then message "toggle" is published to mqtt_topic.
  MQTT.publish("<mqtt_topic>", "toggle", 0, false);
  }
  else if (e.component === "input:1" && e.info.event === "btn_down") {
  // MQTT.publish(topic, message, qos, retain)
  MQTT.publish("<mqtt_topic>", "toggle", 0, false);
  }
});
