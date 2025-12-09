const int RELAY_PIN_1 = 7;
const int RELAY_PIN_2 = 6;
const int RELAY_PIN_3 = 5;
const int RELAY_PIN_4 = 4;

String inputString = "";
boolean stringComplete = false;

void setup() {
  Serial.begin(9600);
  pinMode(RELAY_PIN_1, OUTPUT);
  pinMode(RELAY_PIN_2, OUTPUT);
  pinMode(RELAY_PIN_3, OUTPUT);
  pinMode(RELAY_PIN_4, OUTPUT);

  digitalWrite(RELAY_PIN_1, LOW); 
  digitalWrite(RELAY_PIN_2, LOW);
  digitalWrite(RELAY_PIN_3, LOW); 
  digitalWrite(RELAY_PIN_4, LOW);

  inputString.reserve(20); 
}

void loop() {

  serialEvent(); 

  if (stringComplete) {
    inputString.trim(); 

    if (inputString == "INTERVENE") {
      digitalWrite(RELAY_PIN_1, HIGH);
      digitalWrite(RELAY_PIN_2, HIGH);
      digitalWrite(RELAY_PIN_3, HIGH);
      digitalWrite(RELAY_PIN_4, HIGH);
      
      delay(1000);
      
      digitalWrite(RELAY_PIN_1, LOW);
      digitalWrite(RELAY_PIN_2, LOW);
      digitalWrite(RELAY_PIN_3, LOW);
      digitalWrite(RELAY_PIN_4, LOW);
    } 
    else {
      digitalWrite(RELAY_PIN_1, LOW);
      digitalWrite(RELAY_PIN_2, LOW);
      digitalWrite(RELAY_PIN_3, LOW);
      digitalWrite(RELAY_PIN_4, LOW);
    }

    inputString = "";
    stringComplete = false;
  }
}

void serialEvent() {
  while (Serial.available()) {
    char inChar = (char)Serial.read();

    if (inChar != '\n') {
      inputString += inChar;
    } 
    else {
      stringComplete = true;
    }
  }
}
