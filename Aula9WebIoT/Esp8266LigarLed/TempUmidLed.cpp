#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>
#include <string> 
#include <stdio.h>
#include <iostream>
#include <sstream>
#include <SPI.h>
#include <DHT.h>

#define DHTPIN 4 //Pino digital D2 (GPIO4) conectado ao DHT11
#define DHTTYPE DHT11 //Tipo do sensor DHT11
DHT dht(DHTPIN, DHTTYPE); //Inicializando o objeto dht do tipo DHT passando como parâmetro o pino (DHTPIN) e o tipo do sensor (DHTTYPE)
float temperatura = 0.0; //variável para armazenar a temperatura
float umidade = 0.0; //Variável para armazenar a umidade

const char* ssid = "redex";
const char* password = "senhay";
ESP8266WebServer server(80);

void setup() {
  pinMode(D1, OUTPUT); 
  digitalWrite(D1, LOW); 
  dht.begin(); //Inicializa o sensor DHT11
  // put your setup code here, to run once:
  Serial.begin(9600);
  SPI.begin(); // Init SPI bus
  //Modulo wifi
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.println("");
  // Aguarda Conexão e Informa IP
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Rede WiFi: ");
  Serial.println(ssid);
  Serial.print("Endereço IP: ");
  Serial.println(WiFi.localIP());
  delay(100);
  server.on("/", handle_OnConnect);
  server.on("/ligar_led", handle_ligar_led);
  server.on("/desligar_led", handle_desligar_led);
  server.on("/atualizar_clima", handle_atualizar_clima);
  server.onNotFound(handle_NotFound);
  server.begin();
  Serial.println("Servidor HTTP iniciado!");
  handle_atualizar_clima();
}

void loop() {
  // put your main code here, to run repeatedly:
  server.handleClient();  
}

void handle_OnConnect() {
  server.send(200, "text/html", SendHTML());
}

void handle_ligar_led() {
  digitalWrite(D1, HIGH);
}

void handle_desligar_led() {
  digitalWrite(D1, LOW);
}

void handle_atualizar_clima() {
  temperatura = dht.readTemperature();  //Realiza a leitura da temperatura
  umidade = dht.readHumidity(); //Realiza a leitura da umidade
  Serial.print("Temperatura: ");
  Serial.print(temperatura); //Imprime no monitor serial o valor da temperatura lida
  Serial.println(" ºC");
  Serial.print("Umidade: ");
  Serial.print(umidade); //Imprime no monitor serial o valor da umidade lida
  Serial.println(" %");
  server.send(200, "text/html", SendHTML());
}

void handle_NotFound() {
  server.send(404, "text/plain", "Not found");
}

String SendHTML() {
  String ptr = "<!DOCTYPE html>";
        ptr += "<html lang='en'>";
        ptr += "<head>";
        ptr += "<meta charset='UTF-8'>";
        ptr += "<meta http-equiv='X-UA-Compatible' content='IE=edge'>";
        ptr += "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
        ptr += "<meta http-equiv='refresh' content='4'>";
        ptr += "<title>Document</title>";
        ptr += "<style>";
        ptr += ".containerGeral {";
        ptr += "text-align: center;";
        ptr += "}";
        ptr += ".button1 {";
        ptr += "background-color: #000099;";
        ptr += "color: #ffffff;";
        ptr += "width: 200px;";
        ptr += "height: 80px;";
        ptr += "margin: 10px;";
        ptr += "}";
        ptr += ".button2 {";
        ptr += "background-color: #990000;";
        ptr += "color: #ffffff;";
        ptr += "width: 200px;";
        ptr += "height: 80px;";
        ptr += "margin: 10px;";
        ptr += "}";
        ptr += "</style>";
        ptr += "</head>";
        ptr += "<body>";
        ptr += "<div class='containerGeral'>";
        ptr += "<h1>Controle de Led pelo Wifi</h1>";
        ptr += "<button class='button1' onclick='ligarLed()'>Ligar Led</button>";
        ptr += "<button class='button2' onclick='desligarLed()'>Desligar Led</button>";
        ptr += "<h3>Temperatura: </h3>";
        ptr += temperatura;
        ptr += "<h3>Umidade: </h3>";
        ptr += umidade;
        ptr += "</div>";
        ptr += "<script>";
        ptr += "function ligarLed() { fetch('http://192.168.1.17/ligar_led')}";   
        ptr += "function desligarLed() {fetch('http://192.168.1.17/desligar_led')}";        
        ptr += "</script>";
        ptr += "</body>";
        ptr += "</html>";
  return ptr;
}
