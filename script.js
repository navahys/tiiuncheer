const messages = [
  "앞으로 당신의 길은 찬란한 꽃길로 가득할 거예요. 눈부신 성장을 언제나 응원합니다!",
  "LG DX SCHOOL을 훌륭히 수료한 당신! 이제는 망설이지 말고, 활짝 피어날 꽃길 위를 당당히 걸어가세요!",
  "당신의 멋진 여정이 디지털처럼 빛나고, 가장 아름다운 꽃처럼 만개하길 진심으로 바랍니다.",
  "끝은 새로운 시작! 지금 이 순간부터 당신 앞에 펼쳐질 꽃길을 설레는 마음으로 응원할게요!",
  "세상을 바꿀 디지털 전사여, 이제는 세상으로 나아가세요! 꽃길 위에서 당신의 열정을 마음껏 펼쳐 보이세요!",
  "오늘 LG DX SCHOOL에서 내린 소중한 뿌리가 내일 가장 찬란한 꽃을 피울 거예요. 당신의 미래를 기대합니다!",
  "배움으로 더욱 단단해진 당신의 길에는 언제나 따스한 봄바람과 희망의 꽃이 함께할 겁니다.",
  "디지털이라는 위대한 씨앗을 심은 당신, 이제 그 씨앗이 아름다운 꽃으로 활짝 피어날 시간이에요!",
  "함께했던 그 모든 소중한 시간들이 당신을 더욱 빛나게 했어요. 이제부터는 오직 꽃길만 펼쳐지길 진심으로 바랍니다!",
  "변화를 두려워하지 않고 용기 있게 도전했던 당신! 그 값진 용기 위에 벌써 아름다운 꽃이 피어나고 있어요.",
  "LG DX SCHOOL과 함께한 시간은 당신의 무한한 가능성을 깨운 순간이었어요. 이제는 당신의 역량을 꽃처럼 활짝 피워낼 차례입니다!",
  "코딩은 끝났지만, 여러분의 빛나는 꽃길은 이제 막 시작됐어요. 앞으로가 더 기대됩니다!",
  "DX의 깊은 배움을 가슴에 품고, 여러분이 꿈꾸는 꽃길을 향해 멋지게 나아가세요! 늘 응원할게요!",
  "디지털 역량으로 무장한 여러분 앞에는 가장 아름다운 꽃피는 미래가 활짝 기다리고 있습니다!",
  "LG DX SCHOOL을 완주한 당신은 이미 스스로의 길에 가장 찬란한 꽃을 피워낸 진정한 주인공입니다. 정말 자랑스러워요!"
];

const images = [
  "plant1.png", "plant2.png", "plant3.png"
];

function getRandomMessage() {
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  const randomImg = images[Math.floor(Math.random() * images.length)];
  document.getElementById("cheerMessage").innerText = randomMsg;
  document.getElementById("plantImage").src = randomImg;
}

window.onload = getRandomMessage;
