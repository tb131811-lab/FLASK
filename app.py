import os
from flask import Flask, render_template, request, jsonify
from openai import OpenAI

app = Flask(__name__)

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY", "YOUR_OPENAI_API_KEY"))

# 상단 네비게이션 카테고리 (12개)
CATEGORIES = [
    "열대어생물", "🌱 수초", "수초관리", "사료,먹이", "수조,어항",
    "여과용품", "조명,히터", "바닥재,장식", "수질관리", "청소,기타",
    "커뮤니티", "고객센터"
]

# 슬라이더 배너 이미지 목록 (나란히 놓인 수조 슬라이드 반영)
SLIDER_IMAGES = [
    "https://images.unsplash.com/photo-1520301255226-bf5f144451c1?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1600&q=80"
]

# 하단 4분할 섹션 데이터
SECTIONS = {
    "guppy": {
        "title": "어항속작은요정구피",
        "subtitle": "다양한구피들을만나보세요!",
        "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
    },
    "hello": {
        "title": "2025",
        "subtitle": "HELLO's 스페셜아이템!",
        "description": "고객님들을위해 항상새롭게도전합니다!",
        "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
        "thumbnails": [
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=150&q=80",
            "https://images.unsplash.com/photo-1520301255226-bf5f144451c1?auto=format&fit=crop&w=150&q=80",
            "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=150&q=80",
            "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=150&q=80"
        ]
    },
    "betta": {
        "title": "천상의아름다움",
        "subtitle": "BETTA SPLENDENS",
        "image": "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80"
    },
    "set": {
        "title": "다양한세트상품!",
        "subtitle": "내수조에맞게한번에!",
        "tag": "SET >",
        "image": "https://images.unsplash.com/photo-1520301255226-bf5f144451c1?auto=format&fit=crop&w=800&q=80"
    }
}

@app.route('/')
def index():
    return render_template('index.html', categories=CATEGORIES, sliders=SLIDER_IMAGES, sections=SECTIONS)

@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    data = request.get_json()
    user_message = data.get('message', '')

    if not user_message:
        return jsonify({"error": "Empty message"}), 400

    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "당신은 구피, 베타, 수초 및 수조 용품 전문 수족관 쇼핑몰의 AI 상담원입니다. 친절하고 정확하게 수조 관리, 구피 키우기 등을 안내하세요."},
                {"role": "user", "content": user_message}
            ]
        )
        return jsonify({"reply": response.choices[0].message.content})
    except Exception as e:
        return jsonify({"reply": "안녕하세요! 구피나 베타 등 열대어 키우기에 대해 궁금한 점이 있으신가요?"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)