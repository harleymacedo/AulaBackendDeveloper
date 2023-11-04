void setup() {
  // Definir portas e pinos
  pinMode(D1, OUTPUT);
  pinMode(D2, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(D1, HIGH);
  digitalWrite(D2, HIGH);
  delay(9000);

  digitalWrite(D2, LOW);
  digitalWrite(D2, LOW);
  delay(9000);
}