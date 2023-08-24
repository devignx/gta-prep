import React, { useState } from "react";
import Cards from "./UpliftCards";
import Usefade from "../UseFade";

const Uplift = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categoriesData = {
        "Overcoming anxiety": [
            "In the storm of anxiety, remember that you are stronger than you think.",
            "Anxiety may knock on your door, but courage is what opens it.",
            "Embrace the unknown with a heart full of courage. Anxiety loses its grip when you face it.",
            "In the midst of anxiety's chaos, find the calmness within your breath.",
            "Fear may be the canvas, but your actions paint the masterpiece of overcoming anxiety.",
            "Turn your anxious thoughts into stepping stones to a brighter, calmer horizon.",
            "Anxiety may visit, but it doesn't have to stay. Replace it with hope and resilience.",
            "Courage doesn't mean the absence of fear; it means taking action despite it.",
            "When anxiety whispers doubt, respond with determination and unwavering belief.",
            "In the face of anxiety, your strength shines brightest. You're more resilient than you know.",
            "Anxiety may be a guest, but you're the host. Show it the door with confidence.",
            "Replace the shadows of anxiety with the light of self-empowerment and courage.",
            "Anxiety is a temporary visitor; your strength is a permanent resident.",
            "Fear may knock at your door, but you're the gatekeeper of your own peace.",
            "In the realm of anxiety, courage is your most powerful weapon.",
            "Each step taken in the face of anxiety is a victory over the darkness within.",
            "Let anxiety be a reminder of your strength to face challenges head-on.",
            "Anxiety may cloud the sky, but your determination can bring the sun back.",
            "Anxiety bends, but your spirit remains unbreakable. You are the warrior."
          ],
          "Finding inner peace": [
            "Within the chaos, find the sanctuary of your own inner peace.",
            "The journey to peace begins with the steps you take within yourself.",
            "In the stillness of your heart, you'll discover the wellspring of true peace.",
            "Amidst the noise, seek solace within your own calm center.",
            "Peace is not found in the absence of turmoil, but in the presence of tranquility within.",
            "Your mind is the canvas; paint it with the colors of serenity and peace.",
            "The path to peace is paved with self-discovery, acceptance, and inner love.",
            "In the quiet moments, listen to the whispers of your own inner peace.",
            "Embrace the silence within; it holds the key to unlocking lasting peace.",
            "Within the chaos of life, become a beacon of peace and serenity.",
            "Peace is not an external destination; it's a journey you embark upon within.",
            "Cultivate inner peace like a precious garden. Nurture it, and watch it bloom.",
            "In the turbulence of life, seek refuge in the tranquility of your own soul.",
            "Amidst the storms, remember that you possess the power to create your own calm.",
            "Peace is the compass that guides you through life's twists and turns.",
            "Peace is not the absence of troubles; it's the presence of a peaceful heart.",
            "The greatest gift you can give yourself is the gift of inner peace.",
            "In the chaos of the world, let your heart be the oasis of peace.",
            "Discover the treasure of inner peace, and you'll carry it with you wherever you go.",
            "Peace is not a destination; it's the sacred journey you undertake within."
          ],
          "Dealing with fear": [
            "Fear is a roadblock; courage is the detour that leads to triumph.",
            "Embrace fear, for within it lies the raw material for your strength and growth.",
            "Fear is the canvas; your actions are the strokes that turn it into a masterpiece.",
            "When fear whispers doubt, let your determination roar with conviction.",
            "The journey of conquering fear begins with a single step of courage.",
            "Fear may be a visitor, but you're the host of your own destiny.",
            "In the arena of fear, your bravery becomes your most powerful weapon.",
            "Fear may knock, but you're the gatekeeper of your own courage.",
            "Courage doesn't mean the absence of fear; it's the triumph over it.",
            "Face your fears with a heart full of bravery. You're capable of remarkable things.",
            "Fear is a shadow that diminishes in the light of your determination.",
          "Replace the shackles of fear with the wings of boldness and determination.",
          "Fear may be a dark cloud, but your strength can break through to the light.",
          "Fear may linger, but you have the power to rewrite its narrative with courage.",
          "Fear is a puzzle; your actions are the pieces that form a picture of empowerment.",
          "Amidst fear's darkness, your courage becomes the guiding star.",
          "Fear may be the adversary, but your persistence is the victor.",
          "When fear whispers despair, let your actions answer with unwavering belief.",
          "Fear doesn't define you; your response to it does. Choose courage.",
          "You are the author of your own courage story. Let it be a bestseller."
        ],
        "Building resilience": [
          "In the ashes of setbacks, find the fuel to rise with greater resilience.",
          "Adversity doesn't break you; it refines you into a stronger version of yourself.",
          "Resilience is your armor against life's storms. Wear it proudly.",
          "With each challenge you overcome, you forge the armor of resilience.",
          "Resilience is not the absence of challenges; it's the triumph over them.",
          "Turn setbacks into stepping stones, and watch resilience become your foundation.",
          "In the face of adversity, your resilience becomes your most valuable asset.",
          "Adversity tests your limits; resilience shatters those limits.",
          "Resilience is the guardian of your dreams, protecting them from doubt and defeat.",
          "Your scars are not signs of weakness; they're symbols of your resilience.",
          "The storms of life may be fierce, but your resilience is fiercer.",
          "Resilience is your compass, guiding you through the wilderness of challenges.",
          "Embrace challenges as opportunities to showcase the power of your resilience.",
          "Resilience is your ally, transforming obstacles into stepping stones.",
          "Adversity may bend you, but it cannot break the unyielding spirit of resilience.",
          "With resilience as your anchor, no storm can sink your ship of dreams.",
          "Resilience is the muscle that strengthens with each challenge you face.",
          "Adversity is the canvas; resilience is the masterpiece that emerges from it.",
          "In the face of challenges, let your resilience be your beacon of hope.",
          "Resilience is not a quality; it's a state of being that transforms trials into triumphs."
        ],
        "Self care and Well being": [
          "Amidst life's demands, remember to nourish your soul with self-care.",
          "Prioritize self-care, for it's the foundation of your well-being.",
          "Self-care is not selfish; it's a powerful act of self-love and preservation.",
          "In the pursuit of success, don't forget to fuel your well-being with self-care.",
          "Nurturing your well-being is the ultimate act of kindness toward yourself.",
          "Amidst life's hustle, create a sanctuary of self-care and rejuvenation.",
          "Well-being blooms when you water the garden of your own self-care.",
          "Self-care is the compass that guides you back to yourself amidst life's chaos.",
          "Prioritize self-care as an investment in your present and future well-being.",
          "In the symphony of life, self-care is the harmonious note that keeps you in tune.",
          "Amidst the rush, make time for the soothing balm of self-care.",
          "Well-being flourishes when self-care becomes a non-negotiable part of your routine.",
          "In the dance of life, let self-care be your graceful partner.",
          "Amidst responsibilities, don't forget to replenish your well-being with self-care.",
          "Self-care is the reset button that restores your energy and revitalizes your spirit.",
          "Prioritize self-care, for it's the foundation upon which you build a life of fulfillment.",
          "Amidst the chaos, self-care is the refuge that restores your equilibrium.",
          "Nurture your well-being with self-care, and watch it blossom like a beautiful garden.",
          "Well-being is a treasure; self-care is the map that leads you to it.",
          "In the journey of life, self-care is the compass that guides you toward balance and fulfillment."
        ],
        "Positive Affirmations": [
          "I am worthy of all the love and success that come my way.",
          "I have the power to overcome any challenge that crosses my path.",
          "Each day, I grow stronger, wiser, and more resilient.",
          "I am the architect of my own destiny, and I shape it with positivity.",
          "I radiate positivity and attract abundance into my life.",
          "I am not defined by my past; I am empowered by my present choices.",
          "I believe in my abilities and trust that I can achieve my goals.",
          "With every step I take, I am moving closer to my dreams.",
          "I embrace change as a gateway to new opportunities and growth.",
          "I choose to see the beauty and potential in every situation.",
          "I am capable of creating a life filled with joy, purpose, and fulfillment.",
          "I am a magnet for positivity, and I attract positivity in every aspect of my life.",
          "I am in control of my thoughts, and I choose thoughts that uplift and inspire me.",
          "I am resilient, and I bounce back from challenges with grace and strength.",
          "I am not limited by my fears; I am propelled by my courage.",
          "I am deserving of success, and I embrace the journey toward it.",
          "I am the author of my own story, and I write it with positivity and determination.",
          "I release self-doubt and embrace my potential for greatness.",
          "I trust in my intuition and make decisions that align with my highest good.",
          "I am a beacon of light, and my positivity shines brightly in the world."
        ],
      "Mindful Living": [
          "In the present moment, I find the serenity of true living.",
          "The art of living lies in savoring each moment with mindfulness.",
          "Each breath I take is an invitation to experience the beauty of life.",
          "The gift of life is best enjoyed when unwrapped with mindfulness.",
          "Amidst the chaos, I find solace in the simplicity of mindful living.",
          "I anchor myself to the present moment, where true living unfolds.",
          "Mindful living is not a destination; it's a journey of presence and awareness.",
          "In the canvas of life, every moment is a stroke of mindful living.",
          "I choose to be fully present, for that's where life's magic resides.",
          "Through the lens of mindfulness, every moment becomes a masterpiece.",
          "In the embrace of mindfulness, life's beauty and blessings are amplified.",
          "I am not a spectator; I am an active participant in the symphony of mindful living.",
          "The art of mindful living is to dance in the rain of each moment's grace.",
          "Each day is a canvas, and I paint it with the vibrant colors of mindful living.",
          "The tapestry of life becomes rich and vivid when woven with threads of mindfulness.",
          "In the sanctuary of the present moment, I find the treasure of mindful living.",
          "The heart of mindful living is to engage fully with each passing moment.",
          "Through mindfulness, I uncover the hidden gems within the fabric of ordinary moments.",
          "Mindful living is not a practice; it's a way of being that enriches every experience.",
          "I am not hurried; I am in harmony with the rhythm of mindful living."
        ],
        "Managing Stress": [
          "Amidst life's demands, I carve out moments for relaxation and rejuvenation.",
          "Stress may knock, but I answer with a shield of calm and tranquility.",
          "Amidst the whirlwind, I find refuge in the oasis of stress-free moments.",
          "Stress may be the current, but my serenity is the anchor that keeps me grounded.",
          "I release stress and welcome in a calm and peaceful state of mind.",
          "Stress is a temporary visitor; relaxation and balance are my constant companions.",
          "In the chaos of life, I find pockets of peace to recharge and renew.",
          "I am the calm amidst the storm of stress, anchored in tranquility.",
          "Amidst the hustle, I prioritize self-care as an antidote to stress.",
          "Stress doesn't define me; my response to it does. I choose calmness.",
          "In the symphony of life, I play the soothing melody of stress management.",
          "I create a sanctuary of calm within, where stress has no entry.",
          "I am not a victim of stress; I am the victor over it through relaxation and self-care.",
          "Stress may be the challenge, but my resilience and balance are the solutions.",
          "Amidst the noise, I seek silence; amidst stress, I cultivate serenity.",
          "I release stress with each exhale, making room for tranquility to enter.",
          "I am not consumed by stress; I am empowered by my ability to manage it.",
          "I prioritize stress relief as an essential part of my daily routine.",
          "Amidst the chaos, I find stillness, for within stillness lies peace.",
          "I am in control of my stress; I choose relaxation and well-being."
        ],
        "Embracing Change": [
          "Change is the gateway to growth and transformation. I welcome it.",
          "In the river of change, I flow with the current of possibility and renewal.",
          "Change may be unsettling, but it's also the catalyst for new beginnings.",
          "Embrace change as a bridge to a brighter, more fulfilled version of yourself.",
          "With each change, I become more adaptable, resilient, and empowered.",
          "Change is the canvas; my actions are the brushstrokes that create the masterpiece of my life.",
          "Amidst the unknown, I find the courage to embrace change with an open heart.",
          "Change is the journey that leads to the destination of personal growth and evolution.",
          "I am not limited by change; I am liberated by my ability to navigate it.",
          "In the realm of change, my resilience shines as a guiding star.",
          "Change may challenge me, but it also empowers me to discover new horizons.",
          "Embrace change as a friend, not a foe. It holds the keys to your next chapter.",
          "Change is the chisel that sculpts me into a masterpiece of transformation.",
          "With each change, I shed old layers and step into the light of new possibilities.",
          "Change is not a barrier; it's a bridge to a future filled with potential.",
          "Embrace change as an artist embraces a blank canvas—ready to paint a vibrant new chapter.",
          "In the dance of change, I find the rhythm of growth and renewal.",
          "Change is a compass that guides me toward new adventures and opportunities.",
          "I am not stagnant; I am a traveler on the road of change and transformation.",
          "Change may be the challenge, but my capacity to adapt and thrive is the triumph."
        ],
        "Finding Balance": [
          "Balance is my compass, guiding me through the ebb and flow of life.",
          "In the dance of life, I find harmony by embracing work and relaxation in equal measure.",
          "I prioritize both my ambitions and my well-being, for balance is the key to fulfillment.",
          "Balance is not a destination; it's a continuous journey that enriches my life.",
          "Amidst the demands of life, I carve out time for the restoration of balance.",
          "Balance is the anchor that keeps me steady amidst life's challenges and triumphs.",
          "In the pursuit of success, I honor the importance of maintaining balance.",
          "Balance is my secret weapon for achieving both productivity and well-being.",
          "I am not defined by my work alone; I am a whole person with diverse needs.",
          "Balance is my sanctuary, where I recharge and recalibrate for optimal living.",
          "Amidst the hustle, I find solace in the oasis of a balanced life.",
          "Balance is not a luxury; it's an essential component of a fulfilled life.",
          "I am a conductor of my own life symphony, ensuring every note is in balance.",
          "In the tapestry of life, balance is the thread that weaves joy and purpose together.",
          "Amidst the chaos, I maintain my equilibrium through a commitment to balance.",
          "I prioritize balance as a cornerstone of my journey toward holistic well-being.",
          "Balance is the compass that points me toward a life of harmony and contentment.",
          "In the blend of responsibilities and pleasures, I find my unique balance.",
          "Balance is not a compromise; it's the art of aligning work, play, and self-care.",
          "Amidst the noise, I seek silence; amidst the rush, I cultivate balance."
        ]
    };

    const getRandomQuote = (category) => {
        const quotes = categoriesData[category];
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        console.log(category)
    };

    return (
        <div
            className={` ${
                !selectedCategory && "flex justify-center items-center h-screen"
            }`}
        >
            <Usefade isActive={!selectedCategory}>
                <div className="flex h-full p-4  w-full justify-center flex-wrap gap-4">
                    {Object.keys(categoriesData).map((category) => (
                        <div
                            key={category}
                            className={`bg-white text-black border  p-4  hover:bg-blue-100 rounded-full cursor-pointer text-center`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </div>
                    ))}
                </div>
            </Usefade>
            {selectedCategory && (
                <Cards
                    selectedCategory={selectedCategory}
                    randomQuote={getRandomQuote(selectedCategory)}
                />
            )}
        </div>
    );
};

export default Uplift;
