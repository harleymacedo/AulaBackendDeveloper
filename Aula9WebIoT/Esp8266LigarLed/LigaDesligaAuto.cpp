void setup() {
  // Definir portas e pinos
  pinMode(D1, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(D1, HIGH);
  delay(1000);

  digitalWrite(1, LOW);
  delay(1000);
}