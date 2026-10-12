// Klassisches Outlook für Windows: Dort läuft das Sende-Ereignis ohne Browser-Speicher,
// das Add-in kennt also keine Anmeldung. Die Mail wird deshalb unverändert gesendet.
Office.actions.associate("onMessageSendHandler", function (event) {
  event.completed({ allowEvent: true });
});
