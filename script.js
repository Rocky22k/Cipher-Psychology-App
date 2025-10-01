// ============================================================
// CIPHER AI - ENHANCED JAVASCRIPT (UPDATED VERSION)
// SEARCH: "SCRIPT_MAIN_UPDATED"
// All bug fixes and new features included
// ============================================================

// ============================================================
// API CONFIGURATION
// SEARCH: "API_KEYS_CONFIG"
// ============================================================
const CONFIG = {
  deepgramApiKey: "91e152e7780215029b76d36b67aeb8118896130f",
  groqApiKey: "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",
  huggingFaceApiKey: "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"
};

/* ============================================================
   PRACTICE SCRIPTS LIBRARY - EXPANDED (50 SCRIPTS)
   SEARCH: "PRACTICE_SCRIPTS_EXPANDED"
   Student & social focused, no fill-ins, ready to read
   ============================================================ */

const PRACTICE_SCRIPTS = [

  // ===== CLASS PRESENTATIONS (5 scripts) =====
  {
    id: 1,
    title: "Book Report: To Kill a Mockingbird",
    duration: 45,
    category: "class",
    difficulty: "beginner",
    wordCount: 95,
    text: "Today I'm presenting on To Kill a Mockingbird by Harper Lee. This novel explores themes of racial injustice in the American South during the 1930s. The main character, Scout Finch, learns about prejudice and courage through her father's defense of Tom Robinson. What makes this book powerful is how it shows moral growth through a child's eyes. The story remains relevant today because it challenges us to examine our own biases and stand up for what's right, even when it's difficult."
  },
  {
    id: 2,
    title: "Science Project: Climate Change",
    duration: 60,
    category: "class",
    difficulty: "intermediate",
    wordCount: 125,
    text: "My research project examines the impact of rising carbon emissions on global temperature patterns. Over the past century, atmospheric carbon dioxide has increased by forty percent, correlating with a one degree Celsius rise in average global temperature. This seemingly small change triggers significant effects including melting ice caps, rising sea levels, and more frequent extreme weather events. I collected data from three different sources: NASA climate archives, local weather stations, and ocean temperature measurements. The evidence overwhelmingly shows human activity as the primary driver. Understanding these patterns is crucial because today's decisions will determine the climate future generations inherit."
  },
  {
    id: 3,
    title: "History Presentation: Civil Rights Movement",
    duration: 50,
    category: "class",
    difficulty: "intermediate",
    wordCount: 105,
    text: "The Civil Rights Movement of the nineteen sixties transformed American society through peaceful protest and legal challenges. Leaders like Martin Luther King Junior advocated nonviolent resistance, inspired by Gandhi's philosophy. Key victories included the Civil Rights Act of nineteen sixty four, which outlawed discrimination, and the Voting Rights Act of nineteen sixty five. These weren't just legal changes but fundamental shifts in how Americans viewed equality and justice. The movement's strategies of sit-ins, boycotts, and marches demonstrated that organized peaceful action can overcome entrenched injustice. Its lessons continue guiding social justice movements worldwide today."
  },
  {
    id: 4,
    title: "Math Concept Explanation: Pythagorean Theorem",
    duration: 40,
    category: "class",
    difficulty: "beginner",
    wordCount: 85,
    text: "The Pythagorean theorem states that in a right triangle, the square of the hypotenuse equals the sum of squares of the other two sides. If we call the sides A, B, and C, then A squared plus B squared equals C squared. This works every single time for right triangles. You can use this to find missing side lengths. For example, if one side is three units and another is four units, the hypotenuse must be five units because nine plus sixteen equals twenty five. This theorem is fundamental in construction, navigation, and computer graphics."
  },
  {
    id: 5,
    title: "Group Project Introduction",
    duration: 35,
    category: "class",
    difficulty: "beginner",
    wordCount: 75,
    text: "Our team has been working on renewable energy solutions for three weeks. I focused on solar panel efficiency, Sarah researched wind turbines, and Marcus investigated hydroelectric power. We discovered that combining multiple renewable sources creates more reliable energy systems than depending on just one. Today we'll share our findings and explain why diversification is key to sustainable energy. Each of us will present our section, then we'll answer questions about how these technologies can work together."
  },

  // ===== FRIEND CONVERSATIONS (8 scripts) =====
  {
    id: 6,
    title: "Catching Up After Summer",
    duration: 40,
    category: "friends",
    difficulty: "beginner",
    wordCount: 85,
    text: "Hey! I haven't seen you since school ended. How was your summer? I ended up working at my uncle's restaurant most of July, which was exhausting but I saved a lot of money. Then my family did a road trip to Yellowstone in August. The geysers were incredible, way more impressive than photos show. I also finally learned to skateboard, though I've got the bruises to prove it. What did you end up doing? Did you go to that music camp you were talking about?"
  },
  {
    id: 7,
    title: "Asking for Help with Personal Issue",
    duration: 50,
    category: "friends",
    difficulty: "intermediate",
    wordCount: 105,
    text: "I need to talk to you about something that's been bothering me. My parents have been fighting a lot lately, and the tension at home is really getting to me. I know they're stressed about money, but hearing them argue every night makes it hard to focus on anything else. I haven't told anyone else because I didn't want people to worry or think less of my family. But keeping it inside is making me feel worse. I'm not asking you to fix anything, I just needed to tell someone who would understand. Have you ever dealt with something like this? How did you handle it?"
  },
  {
    id: 8,
    title: "Deep Conversation About Future",
    duration: 55,
    category: "friends",
    difficulty: "intermediate",
    wordCount: 115,
    text: "Sometimes I wonder if we're making the right choices about college. Everyone acts like they have everything figured out, but I'm terrified of picking the wrong major and wasting years on something I end up hating. My parents want me to study business because it's practical, but I'm way more interested in psychology. The pressure to have my entire life planned at eighteen feels overwhelming. Do you ever feel like that? Like you're supposed to know exactly who you'll become when you barely know who you are now? I think we put too much pressure on ourselves to have perfect answers when really we should focus on learning and exploring."
  },
  {
    id: 9,
    title: "Sharing Exciting News",
    duration: 30,
    category: "friends",
    difficulty: "beginner",
    wordCount: 65,
    text: "You won't believe what just happened! Remember that art contest I entered last month? I won second place! I honestly didn't think I had a chance because the other entries were so good. The prize is five hundred dollars and they're displaying my piece in the community gallery for three months. My art teacher almost cried when I told her. I'm still in shock. This might actually be something I could pursue seriously."
  },
  {
    id: 10,
    title: "Making Weekend Plans",
    duration: 35,
    category: "friends",
    difficulty: "beginner",
    wordCount: 75,
    text: "What are you doing this Saturday? A bunch of us are planning to hit the new arcade downtown, then maybe grab food at that burger place everyone's been talking about. I heard they have this crazy milkshake with an entire slice of cake on top. We're meeting around two, so it won't take up your whole day if you have other stuff planned. Marcus is bringing his car so we have rides covered. You should definitely come, it'll be fun!"
  },
  {
    id: 11,
    title: "Supporting Friend Through Breakup",
    duration: 45,
    category: "friends",
    difficulty: "intermediate",
    wordCount: 95,
    text: "I know you're going through a really rough time right now. Breaking up after a year together is hard, there's no way around that. But I want you to know that what you're feeling is completely normal. It's okay to be sad and miss them while also knowing the relationship wasn't working. You made a difficult but mature decision. Give yourself time to heal instead of trying to rush past the pain. And remember you have people who care about you. If you need to talk at three in the morning, call me. That's what friends are for."
  },
  {
    id: 12,
    title: "Planning Group Study Session",
    duration: 40,
    category: "friends",
    difficulty: "beginner",
    wordCount: 85,
    text: "We should organize a study group for the chemistry final. That test is going to be brutal and I definitely can't handle it alone. My house works if everyone's okay with that. My mom said she'd make snacks and we can use the dining room table. We could meet this Thursday after school and go over practice problems together. Maybe Sarah can explain bonding since she actually understands that unit. If we divide up the topics and teach each other, we'll all retain more information. Who's in?"
  },
  {
    id: 13,
    title: "Resolving Friend Conflict",
    duration: 50,
    category: "friends",
    difficulty: "advanced",
    wordCount: 105,
    text: "I think we need to talk about what happened at the party last week. When you made that joke about my job in front of everyone, it really hurt my feelings. I know you probably didn't mean it the way it came across, but it felt like you were putting me down to get a laugh. I've been thinking about whether to say something because I didn't want to make things awkward. But our friendship matters more than avoiding uncomfortable conversations. I value our relationship and that's why I'm bringing this up. Can we talk about it honestly? I want to understand your perspective too."
  },

  // ===== RELATIONSHIP/DATING (6 scripts) =====
  {
    id: 14,
    title: "Telling Someone You Like Them",
    duration: 35,
    category: "dating",
    difficulty: "intermediate",
    wordCount: 75,
    text: "I've been wanting to tell you something for a while now. We've been friends for months and I really value that, but I've started to have feelings beyond friendship. You make me laugh more than anyone else and I always look forward to seeing you. I understand if you don't feel the same way, and I hope this doesn't make things weird between us. But I had to be honest about how I feel. Would you maybe want to go out sometime? Just the two of us?"
  },
  {
    id: 15,
    title: "Having the 'Where Is This Going' Talk",
    duration: 45,
    category: "dating",
    difficulty: "advanced",
    wordCount: 95,
    text: "I think we should talk about what we are to each other. We've been hanging out for two months now and I really like you, but I'm not sure if we're on the same page about where this is headed. Are we casually dating? Are we exclusive? I don't want to pressure you into anything you're not ready for, but I also need to know what I should expect. Clarity would help me feel more secure in whatever this is. What do you think? How do you see our relationship?"
  },
  {
    id: 16,
    title: "Expressing Appreciation",
    duration: 30,
    category: "dating",
    difficulty: "beginner",
    wordCount: 65,
    text: "I wanted to tell you how much I appreciate you. The way you always listen when I need to talk, how you remember small details about things I care about, and how you make me feel understood. Not everyone does that. You've been incredibly supportive, especially during these past few stressful weeks. I'm really glad we found each other. Thank you for being exactly who you are."
  },
  {
    id: 17,
    title: "Addressing Trust Issues",
    duration: 50,
    category: "dating",
    difficulty: "advanced",
    wordCount: 105,
    text: "Something's been bothering me and I think we need to talk about it honestly. When you cancelled our plans twice last week without much explanation, it made me feel like I'm not a priority. I don't want to be controlling or insecure, but I need to feel like you're genuinely interested in spending time with me. Maybe there's something going on that you haven't told me about. I'm trying to give you the benefit of the doubt, but communication is really important to me. Can you help me understand what's happening? Is everything okay between us?"
  },
  {
    id: 18,
    title: "Planning a Meaningful Date",
    duration: 35,
    category: "dating",
    difficulty: "beginner",
    wordCount: 75,
    text: "I have an idea for this weekend that I think you'll really like. Remember how you mentioned wanting to see the planetarium? I got us tickets for Saturday night's show about black holes. Afterward we could get dinner at that Italian place near the pier. I know you love their pasta. Nothing fancy, just a chance to spend quality time together doing something you'd enjoy. Does that sound good to you? If you'd rather do something else, I'm totally flexible."
  },
  {
    id: 19,
    title: "Apologizing After an Argument",
    duration: 40,
    category: "dating",
    difficulty: "intermediate",
    wordCount: 85,
    text: "I owe you an apology for how I reacted yesterday. I was stressed about other things and took it out on you, which wasn't fair. When you were trying to help, I snapped at you instead of appreciating your concern. You didn't deserve that. I've been thinking about why I got so defensive and I realize I was embarrassed about the situation. That doesn't excuse my behavior though. I'm genuinely sorry. Can we talk about it? I want to do better."
  },

  // ===== SOCIAL EVENTS (5 scripts) =====
  {
    id: 20,
    title: "Introducing Yourself at a Party",
    duration: 25,
    category: "social",
    difficulty: "beginner",
    wordCount: 55,
    text: "Hi, I'm Alex. I actually don't know many people here, Sarah invited me. How do you know the host? Oh cool, you go to West High? I'm at East but I've heard good things about your music program. This is a great house for a party. Have you tried those cookies on the kitchen counter? They're amazing. What brings you here tonight?"
  },
  {
    id: 21,
    title: "Joining a Group Conversation",
    duration: 30,
    category: "social",
    difficulty: "beginner",
    wordCount: 65,
    text: "Hey, mind if I join you guys? I couldn't help overhearing you talking about that new Marvel movie. I actually saw it last weekend. The plot twist in the second act was insane, totally didn't see it coming. What did you all think? Some people loved it, others said it was too predictable. I'm curious what this group thinks. The special effects were definitely incredible either way."
  },
  {
    id: 22,
    title: "Small Talk at a School Event",
    duration: 35,
    category: "social",
    difficulty: "beginner",
    wordCount: 75,
    text: "These pep rallies always get so loud, right? I can barely hear myself think. Are you going to the game on Friday? I usually don't go to football games but apparently this one's supposed to be really competitive since we're playing our rival school. My friends convinced me we should go and make it an event. Get food trucks beforehand and everything. The energy's supposed to be crazy. You should come if you're free!"
  },
  {
    id: 23,
    title: "Networking at a Conference",
    duration: 45,
    category: "social",
    difficulty: "intermediate",
    wordCount: 95,
    text: "I noticed your name tag says you're from Austin. I'm actually considering applying to colleges in Texas. What's the tech scene like down there? I'm really interested in software development and I heard Austin has a lot of opportunities. Oh, you work for a startup? That must be exciting. What's it like compared to bigger companies? I'm trying to figure out what kind of environment I'd thrive in after graduation. Do you have any advice for someone just starting to explore this field? I'd love to hear your perspective."
  },
  {
    id: 24,
    title: "Making Plans with New Acquaintances",
    duration: 40,
    category: "social",
    difficulty: "intermediate",
    wordCount: 85,
    text: "It was really cool meeting you all tonight. We should definitely hang out again sometime. Are you guys on social media? Let's exchange numbers or Instagram so we can stay in touch. There's this really good breakfast place downtown that just opened. Maybe we could all meet up there next Saturday? Nothing formal, just casual hanging out. I think we'd all get along really well outside of this setting. What do you think? I'm usually free on weekends."
  },

  // ===== STUDY GROUPS (4 scripts) =====
  {
    id: 25,
    title: "Explaining a Complex Topic",
    duration: 50,
    category: "study",
    difficulty: "advanced",
    wordCount: 105,
    text: "Okay, so photosynthesis can seem complicated but let me break it down simply. Plants take in carbon dioxide from the air and water from the soil. Using energy from sunlight captured by chlorophyll, they convert these into glucose and oxygen. The glucose becomes food for the plant, and the oxygen gets released into the atmosphere. Think of it like a factory where sunlight is the power source, carbon dioxide and water are the raw materials, and glucose and oxygen are the products. The whole process happens in the chloroplasts of plant cells. The reason this matters is because it's literally how plants create energy to live and how they produce the oxygen we breathe."
  },
  {
    id: 26,
    title: "Dividing Group Work",
    duration: 40,
    category: "study",
    difficulty: "intermediate",
    wordCount: 85,
    text: "Alright team, let's figure out who's doing what for this project. Emma, you're great at research, want to handle gathering sources? I can create the PowerPoint since I'm comfortable with design. Jordan, you mentioned you're good at writing, so maybe you could draft the main content? And Lily, could you work on the bibliography and citations? That way we're each doing what we're strongest at. Let's set a deadline for Friday to share our individual parts, then meet on Sunday to put everything together. Sound fair to everyone?"
  },
  {
    id: 27,
    title: "Quiz Preparation Strategy",
    duration: 35,
    category: "study",
    difficulty: "beginner",
    wordCount: 75,
    text: "I think we should make flashcards for all the vocabulary terms, there's like forty of them. Then we can quiz each other. I'll take the first twenty terms if someone else wants the second twenty. We should also go through the practice problems at the end of each chapter. Those usually match the test format pretty closely. If we split up the work now, we can cover everything before Thursday. Does anyone have their notes from when we covered cellular respiration? Mine are kind of messy."
  },
  {
    id: 28,
    title: "Teaching Others",
    duration: 45,
    category: "study",
    difficulty: "intermediate",
    wordCount: 95,
    text: "Let me show you the trick I learned for factoring quadratic equations. When you have X squared plus five X plus six, you're looking for two numbers that multiply to six and add to five. That would be two and three. So you can write it as X plus two times X plus three. To check if you're right, just expand it back out using FOIL. Once you practice this method a few times, you'll be able to do it in your head. Here, try this one: X squared plus seven X plus twelve. What two numbers work?"
  },

  // ===== TEACHER INTERACTIONS (4 scripts) =====
  {
    id: 29,
    title: "Requesting an Extension",
    duration: 40,
    category: "teacher",
    difficulty: "intermediate",
    wordCount: 85,
    text: "Hi Professor Martinez, I wanted to talk to you about the research paper due on Friday. My grandmother passed away last week and I had to travel out of state for the funeral. I've been working on the paper but I'm behind where I should be. Would it be possible to get an extension until Monday? I completely understand if that's not feasible, but I wanted to ask since these were extenuating circumstances. I have most of my research done, I just need more time to write and edit properly. Thank you for considering my request."
  },
  {
    id: 30,
    title: "Asking for Clarification",
    duration: 35,
    category: "teacher",
    difficulty: "beginner",
    wordCount: 75,
    text: "Excuse me, can I ask a question about problem fifteen on the homework? I followed all the steps you showed us in class but I'm getting a different answer than the one in the back of the book. I'm not sure where I went wrong. Could you walk me through it? I want to understand the concept, not just get the right answer. Oh, I think I see the issue now. I forgot to square that term. That makes so much more sense. Thank you for explaining it!"
  },
  {
    id: 31,
    title: "Requesting a Letter of Recommendation",
    duration: 45,
    category: "teacher",
    difficulty: "intermediate",
    wordCount: 95,
    text: "Hi Ms. Rodriguez, I'm applying to several summer programs and I was wondering if you'd be willing to write me a letter of recommendation. I really enjoyed your biology class this year and I feel like I demonstrated strong understanding of the material. I'm particularly interested in programs related to environmental science, which connects to what we studied. I know you're busy, so I wanted to give you plenty of notice. The deadline isn't until March fifteenth. I'd be happy to provide you with information about my activities and goals if that would be helpful. Would you be comfortable writing this letter?"
  },
  {
    id: 32,
    title: "Discussing Grade Concerns",
    duration: 50,
    category: "teacher",
    difficulty: "advanced",
    wordCount: 105,
    text: "Mr. Thompson, I wanted to discuss my grade on the last essay. I received a seventy five but I'm not entirely sure what I could improve for next time. I followed the rubric and addressed all the required points, but I must have missed something important. Could you help me understand where I lost points? I really want to get better at writing analytical essays. I'm not trying to argue for a better grade, I genuinely want to learn from my mistakes so I can do better on future assignments. Is there a time we could sit down and go over the feedback together?"
  },

  // ===== JOB/INTERNSHIP (6 scripts) =====
  {
    id: 33,
    title: "Elevator Pitch for Networking",
    duration: 30,
    category: "career",
    difficulty: "intermediate",
    wordCount: 65,
    text: "Hi, I'm Jamie Chen. I'm currently studying computer science with a focus on artificial intelligence. I'm particularly interested in how machine learning can improve healthcare diagnostics. Last summer I interned at a medical tech startup where I helped develop an algorithm for early cancer detection. I'm always looking to connect with people working at the intersection of technology and medicine. What field are you in? I'd love to hear about your work."
  },
  {
    id: 34,
    title: "Job Interview Opening",
    duration: 45,
    category: "career",
    difficulty: "intermediate",
    wordCount: 95,
    text: "Thank you for inviting me to interview today. I'm really excited about this opportunity. I've been following your company for over a year and I'm impressed by your commitment to sustainable practices. When I saw this position open up, it felt like a perfect match for my skills and values. In my previous role, I managed social media accounts for a nonprofit, growing their engagement by sixty percent over six months. I learned how to analyze data, create compelling content, and adapt strategies based on performance metrics. I'm eager to bring those skills to your team and contribute to your mission."
  },
  {
    id: 35,
    title: "Answering 'Tell Me About Yourself'",
    duration: 50,
    category: "career",
    difficulty: "intermediate",
    wordCount: 105,
    text: "I'm a recent graduate with a degree in marketing and a passion for storytelling. Throughout college, I worked part time for a local bookstore where I ran their social media and organized community events. That experience taught me how to connect with audiences and create meaningful engagement. I also completed two internships, one with an advertising agency and another with an e-commerce startup. These experiences showed me I thrive in fast-paced creative environments where I can wear multiple hats. Outside of work, I volunteer with a literacy program teaching reading to adults. I'm drawn to your company because you value both innovation and social responsibility, which aligns perfectly with my professional goals."
  },
  {
    id: 36,
    title: "Explaining a Weakness",
    duration: 40,
    category: "career",
    difficulty: "advanced",
    wordCount: 85,
    text: "One area I'm actively working to improve is public speaking. I tend to get nervous presenting to large groups, which sometimes makes me rush through my points. I've been addressing this by joining Toastmasters and volunteering to present at team meetings whenever possible. Each time I speak publicly, I get a bit more comfortable. I've also learned to prepare more thoroughly, which helps reduce my anxiety. While I may not be a natural public speaker yet, I'm committed to developing this skill because I know it's crucial for career advancement."
  },
  {
    id: 37,
    title: "Negotiating Salary",
    duration: 45,
    category: "career",
    difficulty: "advanced",
    wordCount: 95,
    text: "I'm really enthusiastic about this position and I appreciate the offer. However, I was hoping we could discuss the salary component. Based on my research of industry standards for this role in this region, and considering my three years of experience plus my specialized certification, I was expecting something in the range of sixty to sixty five thousand. I understand budgets can be tight, so I'm open to discussing the total compensation package including benefits, professional development opportunities, and potential for raises. What flexibility do you have in this area?"
  },
  {
    id: 38,
    title: "Following Up After Interview",
    duration: 35,
    category: "career",
    difficulty: "beginner",
    wordCount: 75,
    text: "Hello Ms. Park, I wanted to thank you again for taking the time to interview me yesterday. I really enjoyed learning more about the role and your team's approach to project management. Our conversation reinforced my enthusiasm for this position. I'm particularly excited about the opportunity to work on client-facing projects, as that aligns perfectly with my career goals. Please let me know if you need any additional information from me. I look forward to hearing about next steps in your process."
  },

  // ===== PUBLIC SPEAKING (5 scripts) =====
  {
    id: 39,
    title: "Wedding Toast",
    duration: 50,
    category: "speaking",
    difficulty: "intermediate",
    wordCount: 105,
    text: "I've known Sarah since we were seven years old, and I can honestly say I've never seen her as happy as she is with Michael. Sarah has always been the person who lights up any room she enters, but Michael brings out something even more special in her. They balance each other perfectly. Sarah's spontaneous energy meets Michael's thoughtful planning. His calm presence grounds her endless enthusiasm. Together they're better than they are apart, which is what true partnership looks like. So please raise your glasses with me to Sarah and Michael. May your marriage be filled with laughter, adventure, and the deep friendship that I've watched you build. Cheers to the happy couple!"
  },
  {
    id: 40,
    title: "Award Acceptance Speech",
    duration: 40,
    category: "speaking",
    difficulty: "intermediate",
    wordCount: 85,
    text: "Wow, I honestly did not expect this. Thank you so much to the committee for this honor. This award doesn't belong to me alone though. My team worked incredibly hard on this project, often staying late and pushing through challenges. I also want to thank my mentor, Dr. Williams, who believed in my ideas even when I doubted them myself. And thank you to my family for supporting me through countless late nights and stress-induced moments. This recognition motivates me to keep striving for excellence and to help others pursue their goals as well."
  },
  {
    id: 41,
    title: "Community Meeting Statement",
    duration: 45,
    category: "speaking",
    difficulty: "advanced",
    wordCount: 95,
    text: "I'm here tonight to speak about the proposed budget cuts to our public library. Libraries are more than just book repositories. They're community centers where kids do homework after school, where job seekers access computers, where immigrants take citizenship classes. Cutting the library's hours would disproportionately affect our most vulnerable residents who depend on these free resources. I understand the city faces tough financial decisions, but I urge you to find alternative cost-saving measures. Perhaps we could reduce spending on less essential services. Please reconsider this decision and preserve this vital community resource that serves thousands of residents every week."
  },
  {
    id: 42,
    title: "Introducing a Guest Speaker",
    duration: 35,
    category: "speaking",
    difficulty: "beginner",
    wordCount: 75,
    text: "Good evening everyone. I'm thrilled to introduce tonight's speaker, Dr. Rachel Kim. Dr. Kim is a leading researcher in renewable energy and has published over thirty papers on solar panel efficiency. She holds a doctorate from MIT and currently leads the sustainable technology lab at Stanford University. Her work has contributed to making solar energy more accessible and affordable worldwide. Tonight she'll discuss breakthrough innovations in battery storage technology. Please join me in welcoming Dr. Rachel Kim to the stage."
  },
  {
    id: 43,
    title: "Retirement Speech",
    duration: 55,
    category: "speaking",
    difficulty: "advanced",
    wordCount: 115,
    text: "After thirty five years in education, this is my last day as principal of Lincoln High School. I've watched thousands of students walk these halls, each with their own dreams and challenges. Some of you here tonight were my students decades ago. Seeing what you've become fills me with pride. Teaching and leading in education has been the greatest privilege of my life. I've learned as much from my students as they hopefully learned from me. To the current staff, thank you for your dedication. You change lives every single day, often without realizing it. To the students, never stop questioning, learning, and growing. And remember that success isn't just about grades or careers. It's about becoming good humans who contribute positively to the world."
  },

  // ===== DIFFICULT CONVERSATIONS (5 scripts) =====
  {
    id: 44,
    title: "Apologizing Sincerely",
    duration: 40,
    category: "difficult",
    difficulty: "intermediate",
    wordCount: 85,
    text: "I need to apologize for what I said last week. I was completely out of line and my words were hurtful. I've been thinking about it constantly and I feel terrible. There's no excuse for how I acted. I was frustrated about other things and I took it out on you, which was completely unfair. You didn't deserve that treatment. I value our friendship too much to let my mistake ruin it. I understand if you need time before you're ready to forgive me. I just wanted you to know I'm genuinely sorry and I'm committed to doing better."
  },
  {
    id: 45,
    title: "Setting Boundaries",
    duration: 45,
    category: "difficult",
    difficulty: "advanced",
    wordCount: 95,
    text: "I need to talk to you about something that's been bothering me. When you show up at my house unannounced, it puts me in an awkward position. I really value our friendship but I also need my personal space and time. It would mean a lot if you could text before coming over, even if it's just a few minutes heads up. I'm not trying to push you away, I just function better when I can plan ahead. I hope you understand this isn't about you personally. It's about me establishing healthy boundaries that work for both of us."
  },
  {
    id: 46,
    title: "Saying No to a Request",
    duration: 35,
    category: "difficult",
    difficulty: "intermediate",
    wordCount: 75,
    text: "I really appreciate you thinking of me for this opportunity, but I'm going to have to decline. I'm already committed to several projects and I know I couldn't give this the attention it deserves. Taking on one more thing would mean doing everything poorly instead of some things well. I hope you understand that this isn't a reflection on how I feel about you or the project itself. It's about me being realistic about my current capacity. Thank you for understanding."
  },
  {
    id: 47,
    title: "Addressing Repeated Lateness",
    duration: 45,
    category: "difficult",
    difficulty: "advanced",
    wordCount: 95,
    text: "Hey, can we talk about something? I've noticed you've been consistently late to our plans lately. Last week you were forty minutes late to dinner, and today you showed up half an hour after we agreed to meet. I understand things come up sometimes, but when it happens repeatedly it makes me feel like my time isn't valued. I'm not trying to be harsh, I just want to understand what's going on. Is there something happening that's making it hard for you to be on time? Can we figure out a solution together so we're both comfortable?"
  },
  {
    id: 48,
    title: "Ending a Friendship Respectfully",
    duration: 50,
    category: "difficult",
    difficulty: "advanced",
    wordCount: 105,
    text: "This is really hard for me to say, but I think we need some space from each other. Our friendship has been important to me, but honestly we've grown in different directions. I don't think we have the same values or priorities anymore, and forcing the friendship feels inauthentic. I've noticed we don't really enjoy spending time together like we used to. There's tension where there used to be ease. I'm not angry at you and I don't think either of us did anything wrong. People change and sometimes friendships run their course. I wanted to be honest rather than let things fade awkwardly. I wish you well."
  },

  // ===== CASUAL SMALL TALK (4 scripts) =====
  {
    id: 49,
    title: "Discussing Favorite Music",
    duration: 40,
    category: "casual",
    difficulty: "beginner",
    wordCount: 85,
    text: "What kind of music are you into? I've been really into indie rock lately, bands like The 1975 and Arctic Monkeys. Their sound is so unique, kind of alternative but still catchy. I also love going to concerts when I can afford tickets. There's something special about live music that you just can't get from streaming. Do you have a favorite artist or genre? I'm always looking for new recommendations. My playlist has gotten kind of stale and I need fresh music for studying."
  },
  {
    id: 50,
    title: "Talking About Hobbies",
    duration: 45,
    category: "casual",
    difficulty: "beginner",
    wordCount: 95,
    text: "I started learning guitar about six months ago and I'm completely hooked. My fingers hurt constantly from practicing but it's so rewarding when I finally nail a song I've been working on. Right now I'm trying to learn Wonderwall because apparently that's what every guitar player has to learn at some point. It's harder than it looks though. The chord changes are tricky. Do you play any instruments? Or have any hobbies you're passionate about? I find it helps balance out school stress when I have something creative to focus on that's just for me."
  }
];


// ============================================================
// STATE MANAGEMENT
// SEARCH: "GLOBAL_STATE_OBJECT"
// ============================================================
const STATE = {
  currentAudio: null,
  currentVideoBlob: null,
  rawTranscript: "",
  enhancedTranscript: "",
  analyzedWords: [],
  metrics: null,
  scores: null,
  insights: [],
  recommendations: [],

  viewMode: "enhanced",
  highlightMode: "confidence",

  isRecording: false,
  mediaRecorder: null,
  recordingStartTime: null,
  recordedChunks: [],

  practiceMode: "library",
  selectedScript: null,
  practiceRecording: false,
  practiceAudioBlob: null,
  comparisonResults: null,

  analysisHistory: [],

  loadingProgress: 0,
  currentlyProcessing: false
};

// ============================================================
// INITIALIZE APPLICATION
// SEARCH: "APP_INITIALIZATION"
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("🔮 Cipher AI Initializing...");

  initializeUploadZone();
  initializeRecording();
  initializeTranscriptControls();
  initializePracticeMode();
  loadAnalysisHistory();
  initializeKeyboardShortcuts();

  const howitworksDetails = document.getElementById("howitworksDetails");
  if (howitworksDetails) {
    howitworksDetails.removeAttribute("open");
  }

  document.querySelectorAll(".metric-breakdown").forEach(breakdown => {
    breakdown.removeAttribute("open");
  });

  console.log("✅ Cipher AI Ready");
});

// ============================================================
// UPLOAD ZONE INITIALIZATION
// SEARCH: "UPLOAD_ZONE_SETUP"
// ============================================================
function initializeUploadZone() {
  const uploadZone = document.getElementById("uploadZone");
  const uploadBtn = document.getElementById("uploadBtn");
  const mediaInput = document.getElementById("mediaInput");
  const tryExamplePitch = document.getElementById("tryExamplePitch");
  const tryExampleInterview = document.getElementById("tryExampleInterview");

  if (uploadBtn) {
    uploadBtn.addEventListener("click", () => mediaInput.click());
  }

  if (uploadZone) {
    uploadZone.addEventListener("click", (e) => {
      if (e.target === uploadZone || e.target.closest(".upload-icon")) {
        mediaInput.click();
      }
    });

    uploadZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      uploadZone.classList.add("dragover");
    });

    uploadZone.addEventListener("dragleave", () => {
      uploadZone.classList.remove("dragover");
    });

    uploadZone.addEventListener("drop", (e) => {
      e.preventDefault();
      uploadZone.classList.remove("dragover");
      const file = e.dataTransfer.files[0];
      if (file) {
        handleFileUpload(file);
      }
    });
  }

  if (mediaInput) {
    mediaInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        handleFileUpload(file);
      }
    });
  }

  if (tryExamplePitch) {
    tryExamplePitch.addEventListener("click", () => loadExampleAnalysis("pitch"));
  }

  if (tryExampleInterview) {
    tryExampleInterview.addEventListener("click", () => loadExampleAnalysis("interview"));
  }
}

// ============================================================
// RECORDING INITIALIZATION (FIXED)
// SEARCH: "LIVE_RECORDING_SETUP_FIX"
// ============================================================
function initializeRecording() {
  const recordBtn = document.getElementById("recordBtn");

  if (recordBtn) {
    recordBtn.addEventListener("click", async () => {
      if (!STATE.isRecording) {
        await startRecording();
      } else {
        await stopRecording();
      }
    });
  }
}

// ============================================================
// START RECORDING
// SEARCH: "START_MICROPHONE_RECORDING"
// ============================================================
async function startRecording() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    STATE.mediaRecorder = new MediaRecorder(stream);
    STATE.recordedChunks = [];
    STATE.isRecording = true;
    STATE.recordingStartTime = Date.now();

    const recordBtn = document.getElementById("recordBtn");
    if (recordBtn) {
      recordBtn.textContent = "⏹️ Stop Recording";
      recordBtn.style.background = "linear-gradient(135deg, #64748b, #475569)";
    }

    STATE.mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        STATE.recordedChunks.push(e.data);
      }
    };

    STATE.mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(STATE.recordedChunks, { type: "audio/webm" });
      STATE.currentAudio = audioBlob;

      await processAudioFile(audioBlob, "Live Recording");

      if (recordBtn) {
        recordBtn.textContent = "🎙️ Record Live";
        recordBtn.style.background = "linear-gradient(135deg, #ef4444, #dc2626)";
      }
      STATE.isRecording = false;
    };

    STATE.mediaRecorder.start();
    showToast("Recording started! Speak clearly into your microphone.", "info");

  } catch (error) {
    console.error("Recording error:", error);
    showToast("Could not access microphone. Please check permissions.", "error");
  }
}

// ============================================================
// STOP RECORDING
// SEARCH: "STOP_MICROPHONE_RECORDING"
// ============================================================
async function stopRecording() {
  if (STATE.mediaRecorder && STATE.isRecording) {
    STATE.mediaRecorder.stop();
    STATE.mediaRecorder.stream.getTracks().forEach(track => track.stop());
  }
}

// ============================================================
// TRANSCRIPT CONTROLS INITIALIZATION
// SEARCH: "TRANSCRIPT_VIEW_TABS_SETUP"
// ============================================================
function initializeTranscriptControls() {
  const btnViewEnhanced = document.getElementById("btnViewEnhanced");
  const btnViewRaw = document.getElementById("btnViewRaw");
  const btnViewWords = document.getElementById("btnViewWords");
  const btnEditTranscript = document.getElementById("btnEditTranscript");

  if (btnViewEnhanced) {
    btnViewEnhanced.addEventListener("click", () => switchTranscriptView("enhanced"));
  }
  if (btnViewRaw) {
    btnViewRaw.addEventListener("click", () => switchTranscriptView("raw"));
  }
  if (btnViewWords) {
    btnViewWords.addEventListener("click", () => switchTranscriptView("words"));
  }
  if (btnEditTranscript) {
    btnEditTranscript.addEventListener("click", () => switchTranscriptView("edit"));
  }

  document.querySelectorAll(".highlight-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".highlight-btn").forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      STATE.highlightMode = this.dataset.type;
      if (STATE.viewMode === "words") {
        renderWordAnalysis();
      }
    });
  });
}

// ============================================================
// SWITCH TRANSCRIPT VIEW (UPDATED LABELS)
// SEARCH: "TRANSCRIPT_TAB_SWITCH_IMPROVED"
// ============================================================
function switchTranscriptView(mode) {
  STATE.viewMode = mode;

  document.querySelectorAll(".transcript-tab").forEach((tab) => tab.classList.remove("active"));

  const tabMap = {
    enhanced: "btnViewEnhanced",
    raw: "btnViewRaw",
    words: "btnViewWords",
    edit: "btnEditTranscript"
  };

  const activeTab = document.getElementById(tabMap[mode]);
  if (activeTab) activeTab.classList.add("active");

  const transcriptContent = document.getElementById("transcriptContent");

  if (mode === "enhanced") {
    transcriptContent.innerHTML = `<p style="line-height: 1.8; color: var(--text-secondary);">${STATE.enhancedTranscript || "Processing..."}</p>`;
  } else if (mode === "raw") {
    transcriptContent.innerHTML = `<p style="line-height: 1.8; color: var(--text-secondary);">${STATE.rawTranscript || "Processing..."}</p>`;
  } else if (mode === "words") {
    renderWordAnalysis();
  } else if (mode === "edit") {
    renderEditMode();
  }

  updateRealtimeAnalysisLabel(mode);
}

// ============================================================
// UPDATE REAL-TIME ANALYSIS LABEL VISIBILITY (FIX)
// SEARCH: "REALTIME_LABEL_VISIBILITY_FIX"
// ============================================================
function updateRealtimeAnalysisLabel(mode) {
  const insightTitle = document.getElementById("insightTitle");

  if (insightTitle) {
    if (mode === "words") {
      insightTitle.textContent = "Real-time Analysis";
    } else {
      insightTitle.textContent = "Transcript Insights";
    }
  }
}

// ============================================================
// KEYBOARD SHORTCUTS
// SEARCH: "KEYBOARD_SHORTCUTS_HANDLER"
// ============================================================
function initializeKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      return;
    }

    const audioPlayer = document.getElementById("audioPlayer");

    switch (e.key) {
      case " ":
        e.preventDefault();
        if (audioPlayer && !audioPlayer.paused) {
          audioPlayer.pause();
        } else if (audioPlayer) {
          audioPlayer.play();
        }
        break;

      case "ArrowLeft":
        e.preventDefault();
        if (audioPlayer) {
          audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 5);
        }
        break;

      case "ArrowRight":
        e.preventDefault();
        if (audioPlayer) {
          audioPlayer.currentTime = Math.min(audioPlayer.duration, audioPlayer.currentTime + 5);
        }
        break;

      case "e":
      case "E":
        switchTranscriptView("enhanced");
        break;

      case "r":
      case "R":
        switchTranscriptView("raw");
        break;

      case "w":
      case "W":
        switchTranscriptView("words");
        break;
    }
  });
}

// ============================================================
// FILE UPLOAD HANDLER
// SEARCH: "FILE_UPLOAD_PROCESSING"
// ============================================================
async function handleFileUpload(file) {
  console.log("📁 File uploaded:", file.name, file.type);

  if (!file.type.startsWith("video/") && !file.type.startsWith("audio/")) {
    showToast("Please upload a video or audio file", "error");
    return;
  }

  if (file.size > 2 * 1024 * 1024 * 1024) {
    showToast("File size must be under 2GB", "error");
    return;
  }

  showLoading("Processing Your File", "Extracting audio from media...");
  updateLoadingProgress(10);

  try {
    let audioBlob;

    if (file.type.startsWith("audio/")) {
      audioBlob = file;
      updateLoadingProgress(30);
    } else {
      audioBlob = await extractAudioFromVideo(file);
      updateLoadingProgress(30);
    }

    STATE.currentVideoBlob = file;
    STATE.currentAudio = audioBlob;

    await processAudioFile(audioBlob, file.name);
  } catch (error) {
    console.error("Error processing file:", error);
    hideLoading();
    showToast("Failed to process file. Please try again.", "error");
  }
}

// ============================================================
// EXTRACT AUDIO FROM VIDEO
// SEARCH: "VIDEO_TO_AUDIO_EXTRACTION"
// ============================================================
async function extractAudioFromVideo(videoFile) {
  return new Promise((resolve, reject) => {
    const videoElement = document.createElement("video");
    const audioContext = new AudioContext();

    videoElement.src = URL.createObjectURL(videoFile);

    videoElement.addEventListener("loadedmetadata", async () => {
      try {
        const source = audioContext.createMediaElementSource(videoElement);
        const destination = audioContext.createMediaStreamDestination();
        source.connect(destination);

        const mediaRecorder = new MediaRecorder(destination.stream);
        const chunks = [];

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            chunks.push(e.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(chunks, { type: "audio/webm" });
          URL.revokeObjectURL(videoElement.src);
          resolve(audioBlob);
        };

        mediaRecorder.start();
        videoElement.play();

        videoElement.onended = () => {
          mediaRecorder.stop();
          audioContext.close();
        };

      } catch (error) {
        reject(error);
      }
    });

    videoElement.addEventListener("error", () => {
      reject(new Error("Failed to load video"));
    });
  });
}

/* ============================================================
   SAVE ANALYSIS TO HISTORY - COMPLETE
   SEARCH: "SAVE_ANALYSIS_HISTORY_COMPLETE"
   ============================================================ */

function saveAnalysisToHistory(scores, metrics, transcript) {
  let history = JSON.parse(localStorage.getItem('cipher-analysis-history')) || [];
  
  const analysis = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    date: new Date().toLocaleString(),
    scores: {
      confidence: Math.round(scores.confidence),
      authenticity: Math.round(scores.authenticity),
      engagement: Math.round(scores.engagement)
    },
    metrics: {
      wordsPerMinute: metrics.wordsPerMinute || 0,
      fillerCount: metrics.fillerCount || 0,
      fillerPercentage: metrics.fillerPercentage || 0,
      powerWords: metrics.powerWords || 0,
      wordCount: metrics.wordCount || 0,
      duration: metrics.duration || 0
    },
    transcript: transcript.substring(0, 200) + (transcript.length > 200 ? '...' : ''),
    fullTranscript: transcript
  };
  
  history.unshift(analysis);
  
  if (history.length > 10) {
    history = history.slice(0, 10);
  }
  
  localStorage.setItem('cipher-analysis-history', JSON.stringify(history));
  
  console.log('💾 Analysis saved to history');
  
  if (typeof loadAnalysisHistory === 'function') {
    loadAnalysisHistory();
  }
  
  if (typeof updateScoreHistoryChart === 'function') {
    updateScoreHistoryChart();
  }
  
  return analysis;
}


/* ============================================================
   SCORE CALCULATION FUNCTIONS - COMPLETE SET
   SEARCH: "SCORE_CALCULATIONS_COMPLETE"
   All three score calculations with proper algorithms
   ============================================================ */

function calculateConfidenceScore(transcript, metrics) {
  let score = 70; // Base score

  // Filler word penalty (max -25)
  const fillerPenalty = Math.min(25, metrics.fillerPercentage * 2);
  score -= fillerPenalty;

  // Speaking pace (optimal: 130-160 WPM)
  const wpm = metrics.wordsPerMinute;
  if (wpm >= 130 && wpm <= 160) {
    score += 15; // Perfect pace
  } else if (wpm >= 110 && wpm < 130) {
    score += 8; // A bit slow but okay
  } else if (wpm > 160 && wpm <= 180) {
    score += 8; // A bit fast but okay
  } else {
    score -= 10; // Too slow or too fast
  }

  // Word count bonus (longer = more confident)
  if (metrics.wordCount > 100) {
    score += 10;
  } else if (metrics.wordCount > 50) {
    score += 5;
  }

  // Average word length (complex vocabulary = confidence)
  if (metrics.avgWordLength > 5) {
    score += 5;
  }

  // Ensure score is between 0-100
  return Math.max(0, Math.min(100, Math.round(score)));
}

function calculateAuthenticityScore(transcript, metrics) {
  let score = 65; // Base score

  // Power words boost (max +20)
  const powerBonus = Math.min(20, metrics.powerWords * 4);
  score += powerBonus;

  // First-person usage (I, we, my, our = authentic)
  const firstPersonWords = ['i ', 'we ', 'my ', 'our ', 'me ', 'us '];
  const lowerTranscript = transcript.toLowerCase();
  let firstPersonCount = 0;
  firstPersonWords.forEach(word => {
    const matches = lowerTranscript.match(new RegExp(word, 'g'));
    if (matches) firstPersonCount += matches.length;
  });
  const firstPersonBonus = Math.min(15, firstPersonCount * 2);
  score += firstPersonBonus;

  // Vocabulary diversity (unique words / total words)
  const diversityRatio = metrics.uniqueWords / metrics.wordCount;
  if (diversityRatio > 0.6) {
    score += 10; // Very diverse vocabulary
  } else if (diversityRatio > 0.4) {
    score += 5; // Good diversity
  }

  // Penalize excessive repetition
  if (diversityRatio < 0.3) {
    score -= 10;
  }

  return Math.max(0, Math.min(100, Math.round(score)));
}

function calculateEngagementScore(transcript, metrics) {
  let score = 60; // Base score

  // Question marks = engaging (asking questions)
  const questionCount = (transcript.match(/\?/g) || []).length;
  const questionBonus = Math.min(15, questionCount * 5);
  score += questionBonus;

  // Exclamation marks = energy/enthusiasm
  const exclamationCount = (transcript.match(/!/g) || []).length;
  const enthusiasmBonus = Math.min(10, exclamationCount * 3);
  score += enthusiasmBonus;

  // Speaking pace for engagement (faster = more engaging, but not too fast)
  const wpm = metrics.wordsPerMinute;
  if (wpm >= 140 && wpm <= 170) {
    score += 15; // Perfect engaging pace
  } else if (wpm >= 120 && wpm < 140) {
    score += 8; // Decent pace
  } else if (wpm < 100) {
    score -= 10; // Too slow = boring
  }

  // Variety in word length (dynamic speech)
  if (metrics.avgWordLength >= 4.5 && metrics.avgWordLength <= 6) {
    score += 10;
  }

  // Action words boost
  const actionWords = ['do', 'make', 'create', 'build', 'achieve', 'discover', 'explore', 'learn'];
  let actionCount = 0;
  const lowerTranscript = transcript.toLowerCase();
  actionWords.forEach(word => {
    const matches = lowerTranscript.match(new RegExp(`\\b${word}\\b`, 'g'));
    if (matches) actionCount += matches.length;
  });
  const actionBonus = Math.min(10, actionCount * 2);
  score += actionBonus;

  return Math.max(0, Math.min(100, Math.round(score)));
}

/* ============================================================
   SAVE ANALYSIS TO HISTORY
   SEARCH: "SAVE_ANALYSIS_COMPLETE"
   ============================================================ */

function saveAnalysisToHistory(scores, metrics, transcript) {
  let history = JSON.parse(localStorage.getItem('cipher-analysis-history')) || [];
  
  const analysis = {
    id: Date.now(),
    timestamp: new Date().toISOString(),
    date: new Date().toLocaleString(),
    scores: {
      confidence: Math.round(scores.confidence),
      authenticity: Math.round(scores.authenticity),
      engagement: Math.round(scores.engagement)
    },
    metrics: {
      wordsPerMinute: metrics.wordsPerMinute || 0,
      fillerCount: metrics.fillerCount || 0,
      fillerPercentage: metrics.fillerPercentage || 0,
      powerWords: metrics.powerWords || 0,
      wordCount: metrics.wordCount || 0,
      duration: metrics.duration || 0
    },
    transcript: transcript.substring(0, 200) + (transcript.length > 200 ? '...' : ''),
    fullTranscript: transcript
  };
  
  history.unshift(analysis);
  
  if (history.length > 10) {
    history = history.slice(0, 10);
  }
  
  localStorage.setItem('cipher-analysis-history', JSON.stringify(history));
  
  console.log('💾 Analysis saved to history');
  
  if (typeof loadAnalysisHistory === 'function') {
    loadAnalysisHistory();
  }
  
  if (typeof updateScoreHistoryChart === 'function') {
    updateScoreHistoryChart();
  }
  
  return analysis;
}

/* ============================================================
   PROCESS AUDIO FILE - COMPLETE WORKING VERSION
   SEARCH: "PROCESS_AUDIO_COMPLETE_WORKING"
   ============================================================ */

async function processAudioFile(file, transcript) {
  try {
    updateLoadingDescription("Analyzing communication patterns...");
    console.log("🔍 Starting detailed analysis...");

    // Store transcript
    STATE.rawTranscript = transcript;

    // Calculate basic metrics
    const words = transcript.split(/\s+/).filter(w => w.length > 0);
    const wordCount = words.length;
    const duration = STATE.audioDuration || 60;
    const wordsPerMinute = Math.round((wordCount / duration) * 60);

    // Count filler words
    const fillerWords = ['um', 'uh', 'like', 'you know', 'so', 'actually', 'basically', 'literally'];
    let fillerCount = 0;
    const lowerTranscript = transcript.toLowerCase();
    fillerWords.forEach(filler => {
      const regex = new RegExp(`\\b${filler}\\b`, 'gi');
      const matches = lowerTranscript.match(regex);
      if (matches) fillerCount += matches.length;
    });
    const fillerPercentage = ((fillerCount / wordCount) * 100).toFixed(1);

    // Count power words
    const powerWords = ['believe', 'achieve', 'incredible', 'amazing', 'excellent', 'outstanding', 'passionate', 'innovative'];
    let powerWordCount = 0;
    powerWords.forEach(power => {
      const regex = new RegExp(`\\b${power}\\b`, 'gi');
      const matches = lowerTranscript.match(regex);
      if (matches) powerWordCount += matches.length;
    });

    const metrics = {
      wordCount: wordCount,
      duration: duration,
      wordsPerMinute: wordsPerMinute,
      fillerCount: fillerCount,
      fillerPercentage: parseFloat(fillerPercentage),
      powerWords: powerWordCount,
      avgWordLength: words.reduce((sum, w) => sum + w.length, 0) / wordCount,
      uniqueWords: new Set(words.map(w => w.toLowerCase())).size
    };

    // Calculate scores using the functions above
    const scores = {
      confidence: calculateConfidenceScore(transcript, metrics),
      authenticity: calculateAuthenticityScore(transcript, metrics),
      engagement: calculateEngagementScore(transcript, metrics)
    };

    // Store in STATE
    STATE.scores = scores;
    STATE.metrics = metrics;

    console.log("✅ Analysis complete:", scores);

    // Save to history
    saveAnalysisToHistory(scores, metrics, transcript);

    // Display results
    displayQuickResults(scores, metrics);

    // Try word analysis if function exists
    if (typeof analyzeWordsWithGroq === 'function') {
      try {
        const analyzedWords = await analyzeWordsWithGroq(transcript);
        STATE.analyzedWords = analyzedWords;
        if (typeof displayEnhancedTranscript === 'function') {
          displayEnhancedTranscript(transcript, analyzedWords);
        }
      } catch (error) {
        console.warn('⚠️ Word analysis skipped:', error);
      }
    }

    // Hide loading, show dashboard
    hideLoading();
    
    const dashboard = document.getElementById("dashboard");
    if (dashboard) {
      dashboard.style.display = "block";
      dashboard.scrollIntoView({ behavior: "smooth" });
    }

    console.log("🎉 All analysis complete!");

  } catch (error) {
    console.error("❌ Processing error:", error);
    hideLoading();
    alert("Analysis failed: " + error.message);
    throw error;
  }
}
  

/* ============================================================
   PROCESS AUDIO FILE - FIXED VERSION
   SEARCH: "PROCESS_AUDIO_FIXED_WORKING"
   Works with existing code structure
   ============================================================ */

async function processAudioFile(file, transcript) {
  try {
    updateLoadingDescription("Analyzing communication patterns...");
    console.log("🔍 Starting detailed analysis...");

    // Store transcript
    STATE.rawTranscript = transcript;

    // Calculate metrics (using YOUR existing functions)
    const words = transcript.split(/\s+/).filter(w => w.length > 0);
    const wordCount = words.length;
    const duration = STATE.audioDuration || 60; // fallback to 60 seconds
    const wordsPerMinute = Math.round((wordCount / duration) * 60);

    // Count filler words
    const fillerWords = ['um', 'uh', 'like', 'you know', 'so', 'actually', 'basically', 'literally'];
    let fillerCount = 0;
    const lowerTranscript = transcript.toLowerCase();
    fillerWords.forEach(filler => {
      const regex = new RegExp(`\\b${filler}\\b`, 'gi');
      const matches = lowerTranscript.match(regex);
      if (matches) fillerCount += matches.length;
    });
    const fillerPercentage = ((fillerCount / wordCount) * 100).toFixed(1);

    // Count power words
    const powerWords = ['believe', 'achieve', 'incredible', 'amazing', 'excellent', 'outstanding', 'passionate', 'innovative'];
    let powerWordCount = 0;
    powerWords.forEach(power => {
      const regex = new RegExp(`\\b${power}\\b`, 'gi');
      const matches = lowerTranscript.match(regex);
      if (matches) powerWordCount += matches.length;
    });

    const metrics = {
      wordCount: wordCount,
      duration: duration,
      wordsPerMinute: wordsPerMinute,
      fillerCount: fillerCount,
      fillerPercentage: parseFloat(fillerPercentage),
      powerWords: powerWordCount,
      avgWordLength: words.reduce((sum, w) => sum + w.length, 0) / wordCount,
      uniqueWords: new Set(words.map(w => w.toLowerCase())).size
    };

    // Calculate scores
    const scores = {
      confidence: calculateConfidenceScore(transcript, metrics),
      authenticity: calculateAuthenticityScore(transcript, metrics),
      engagement: calculateEngagementScore(transcript, metrics)
    };

    // Store in STATE
    STATE.scores = scores;
    STATE.metrics = metrics;

    console.log("✅ Analysis complete:", scores);

    // Save to history FIRST (critical for charts/progress)
    saveAnalysisToHistory(scores, metrics, transcript);

    // Display results
    displayQuickResults(scores, metrics);

    // Analyze words for transcript highlighting (if function exists)
    if (typeof analyzeWordsWithGroq === 'function') {
      try {
        const analyzedWords = await analyzeWordsWithGroq(transcript);
        STATE.analyzedWords = analyzedWords;
        displayEnhancedTranscript(transcript, analyzedWords);
      } catch (error) {
        console.warn('⚠️ Word analysis failed, skipping:', error);
      }
    }

    // Hide loading, show dashboard
    hideLoading();
    
    const dashboard = document.getElementById("dashboard");
    if (dashboard) {
      dashboard.style.display = "block";
      dashboard.scrollIntoView({ behavior: "smooth" });
    }

    console.log("🎉 All analysis complete and displayed");

  } catch (error) {
    console.error("❌ Processing error:", error);
    hideLoading();
    
    alert("Analysis failed: " + error.message + "\n\nPlease check console for details.");
    throw error;
  }
}


/* ============================================================
   NAME CORRECTION - ENHANCED
   SEARCH: "NAME_CORRECTION_ENHANCED"
   Better phonetic matching for Asfan, Vohra, Ovesh, Cipher
   ============================================================ */
function correctTranscriptNames(transcript) {
  if (!transcript) return transcript;

  let corrected = transcript;

  // Comprehensive replacement patterns
  const corrections = {
    // Asfan variations
    'azfan': 'Asfan',
    'asfaan': 'Asfan',
    'asfen': 'Asfan',
    'azfen': 'Asfan',
    'aspan': 'Asfan',
    'ashfan': 'Asfan',
    'asfun': 'Asfan',
    'azvan': 'Asfan',
    'asfin': 'Asfan',

    // Vohra variations
    'voraah': 'Vohra',
    'vorah': 'Vohra',
    'vorha': 'Vohra',
    'vohra': 'Vohra',
    'voira': 'Vohra',
    'vora': 'Vohra',
    'voora': 'Vohra',
    'vohraa': 'Vohra',

    // Ovesh variations
    'ovish': 'Ovesh',
    'ovesh': 'Ovesh',
    'ovaish': 'Ovesh',
    'oweesh': 'Ovesh',
    'uvesh': 'Ovesh',
    'auvesh': 'Ovesh',

    // Cipher variations
    'cypher': 'Cipher',
    'siphur': 'Cipher',
    'sipher': 'Cipher',
    'cyfer': 'Cipher',
    'cyfur': 'Cipher',
    'sifer': 'Cipher',
  };

  // Case-insensitive replacement
  Object.keys(corrections).forEach(wrong => {
    const right = corrections[wrong];
    // Match whole words with word boundaries
    const regex = new RegExp(`\\b${wrong}\\b`, 'gi');
    corrected = corrected.replace(regex, right);
  });

  // Ensure proper capitalization for these names anywhere in text
  corrected = corrected.replace(/\basin\b/gi, match => {
    // Check context - if followed by common words, don't replace
    return match;
  });

  return corrected;
}

// ============================================================
// TRANSCRIBE AUDIO (DEEPGRAM API)
// SEARCH: "DEEPGRAM_TRANSCRIPTION_DUAL_PASS"
// ============================================================
async function transcribeAudio(audioBlob) {
  try {
    const rawResponse = await fetch(
      "https://api.deepgram.com/v1/listen?model=nova-2&punctuate=false&filler_words=true&diarize=false",
      {
        method: "POST",
        headers: {
          Authorization: `Token ${CONFIG.deepgramApiKey}`,
        },
        body: audioBlob,
      }
    );

    if (!rawResponse.ok) {
      throw new Error(`Deepgram API error: ${rawResponse.status}`);
    }

    const rawData = await rawResponse.json();
    const rawTranscript = rawData.results.channels[0].alternatives[0].transcript;

    const formattedResponse = await fetch(
      "https://api.deepgram.com/v1/listen?model=nova-2&smart_format=true&punctuate=true&utterances=true&diarize=false",
      {
        method: "POST",
        headers: {
          Authorization: `Token ${CONFIG.deepgramApiKey}`,
        },
        body: audioBlob,
      }
    );

    const formattedData = await formattedResponse.json();
    const words = formattedData.results.channels[0].alternatives[0].words || [];

    return {
      raw: rawTranscript,
      formatted: formattedData.results.channels[0].alternatives[0].transcript,
      words: words,
    };
  } catch (error) {
    console.error("Transcription error:", error);
    throw error;
  }
}

// ============================================================
// CALCULATE QUICK METRICS
// SEARCH: "BASIC_METRICS_CALCULATION"
// ============================================================
function calculateQuickMetrics(transcript) {
  const words = transcript.toLowerCase().split(/\s+/);
  const wordCount = words.length;

  const fillerWords = ["um", "uh", "like", "you know", "actually", "basically", "sort of", "kind of"];
  let fillerCount = 0;

  words.forEach((word) => {
    if (fillerWords.includes(word)) {
      fillerCount++;
    }
  });

  const fillerPercentage = ((fillerCount / wordCount) * 100).toFixed(1);

  const powerWords = ["achieve", "create", "build", "develop", "improve", "succeed", "innovate", "transform", "deliver", "lead", "drive", "impact"];
  let powerWordCount = 0;

  words.forEach((word) => {
    if (powerWords.includes(word)) {
      powerWordCount++;
    }
  });

  const estimatedDuration = wordCount / 2.5;
  const wordsPerMinute = Math.round((wordCount / estimatedDuration) * 60);

  return {
    wordCount,
    fillerCount,
    fillerPercentage: parseFloat(fillerPercentage),
    powerWordCount,
    wordsPerMinute,
  };
}

// ============================================================
// CALCULATE SCORES (ENHANCED ALGORITHM)
// SEARCH: "SCORING_ALGORITHM_HARSH_BASELINE"
// ============================================================
function calculateScores(transcript, metrics, analyzedWords) {
  let confidenceScore = 40;
  let authenticityScore = 50;
  let engagementScore = 35;

  const words = transcript.toLowerCase().split(/\s+/);
  const wordCount = words.length;

  // === CONFIDENCE SCORE ===
  confidenceScore -= metrics.fillerPercentage * 3;

  if (metrics.powerWordCount > 3) {
    confidenceScore += Math.min(20, metrics.powerWordCount * 3);
  }

  if (metrics.wordsPerMinute >= 120 && metrics.wordsPerMinute <= 160) {
    confidenceScore += 15;
  } else if (metrics.wordsPerMinute < 100 || metrics.wordsPerMinute > 180) {
    confidenceScore -= 10;
  }

  const repetitionPenalty = detectRepetition(words);
  confidenceScore -= repetitionPenalty.points;

  const confidenceMarkers = ["definitely", "absolutely", "certainly", "confident", "sure", "believe", "know"];
  let confidenceMarkerCount = 0;
  words.forEach(word => {
    if (confidenceMarkers.includes(word)) {
      confidenceMarkerCount++;
    }
  });
  if (confidenceMarkerCount > 2) {
    confidenceScore += 10;
  }

  const uncertaintyMarkers = ["maybe", "perhaps", "might", "could", "think", "guess", "probably"];
  let uncertaintyCount = 0;
  words.forEach(word => {
    if (uncertaintyMarkers.includes(word)) {
      uncertaintyCount++;
    }
  });
  confidenceScore -= uncertaintyCount * 2;

  // === AUTHENTICITY SCORE ===
  const personalWords = ["i", "me", "my", "we", "our", "us"];
  let personalWordCount = 0;
  words.forEach(word => {
    if (personalWords.includes(word)) {
      personalWordCount++;
    }
  });
  const personalPercentage = (personalWordCount / wordCount) * 100;

  if (personalPercentage > 5 && personalPercentage < 25) {
    authenticityScore += 20;
  } else if (personalPercentage >= 25) {
    authenticityScore += 10;
  }

  const emotionalWords = ["excited", "passionate", "love", "hate", "frustrated", "happy", "proud"];
  let emotionalCount = 0;
  words.forEach(word => {
    if (emotionalWords.includes(word)) {
      emotionalCount++;
    }
  });
  if (emotionalCount > 0) {
    authenticityScore += emotionalCount * 3;
  }

  authenticityScore -= metrics.fillerPercentage * 1.5;

  // === ENGAGEMENT SCORE ===
  const uniqueWords = new Set(words).size;
  const varietyScore = (uniqueWords / wordCount) * 100;

  if (varietyScore > 60) {
    engagementScore += 20;
  } else if (varietyScore > 40) {
    engagementScore += 10;
  }

  if (metrics.wordsPerMinute >= 130 && metrics.wordsPerMinute <= 170) {
    engagementScore += 20;
  } else if (metrics.wordsPerMinute < 110) {
    engagementScore -= 15;
  } else if (metrics.wordsPerMinute > 180) {
    engagementScore -= 10;
  }

  engagementScore += Math.min(15, metrics.powerWordCount * 2);

  const questionCount = (transcript.match(/\?/g) || []).length;
  engagementScore += questionCount * 3;

  confidenceScore = Math.max(0, Math.min(98, Math.round(confidenceScore)));
  authenticityScore = Math.max(0, Math.min(98, Math.round(authenticityScore)));
  engagementScore = Math.max(0, Math.min(95, Math.round(engagementScore)));

  return {
    confidence: confidenceScore,
    authenticity: authenticityScore,
    engagement: engagementScore,
    repetitionPenalty: repetitionPenalty,
  };
}

// ============================================================
// DETECT REPETITION (NEW FEATURE)
// SEARCH: "REPETITION_DETECTION_PENALTY"
// ============================================================
function detectRepetition(words) {
  const wordFrequency = {};
  const commonWords = new Set(["the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for", "of", "with", "is", "are", "was", "were", "be", "been", "have", "has", "had", "do", "does", "did", "will", "would", "could", "should", "can", "may", "might", "must", "i", "you", "he", "she", "it", "we", "they", "this", "that", "these", "those"]);

  words.forEach(word => {
    const cleanWord = word.toLowerCase().replace(/[^a-z]/g, "");
    if (cleanWord && !commonWords.has(cleanWord)) {
      wordFrequency[cleanWord] = (wordFrequency[cleanWord] || 0) + 1;
    }
  });

  const repeatedWords = [];
  let totalRepetitions = 0;

  Object.entries(wordFrequency).forEach(([word, count]) => {
    if (count >= 3) {
      repeatedWords.push({ word, count });
      totalRepetitions += (count - 2);
    }
  });

  const penaltyPoints = totalRepetitions * 3;

  return {
    repeatedWords,
    points: penaltyPoints,
    count: totalRepetitions
  };
}

// ============================================================
// DISPLAY QUICK RESULTS
// SEARCH: "QUICK_RESULTS_DISPLAY"
// ============================================================
function displayQuickResults(scores, metrics) {
  animateScore("confidenceScore", scores.confidence);
  animateScore("authenticityScore", scores.authenticity);
  animateScore("engagementScore", scores.engagement);

  displayScoreBreakdown("confidence", scores, metrics);
  displayScoreBreakdown("authenticity", scores, metrics);
  displayScoreBreakdown("engagement", scores, metrics);

  updateAnalysisMetrics(metrics);
  displayBasicInsights(scores, metrics);

  STATE.scores = scores;
  STATE.metrics = metrics;
  function displayQuickResults(scores, metrics) {
    // ... all your existing code ...

    /* SEARCH: "DISPLAY_QUICK_RESULTS_ENHANCEMENTS" */
    /* ADD THESE LINES AT THE VERY END OF THE FUNCTION */

    // Generate and display executive summary
    generateExecutiveSummary(STATE.rawTranscript, scores, metrics).then(summary => {
      displayExecutiveSummary(summary);
    });

    // Display benchmark comparison
    displayBenchmarkComparison(scores);

    // Display improvement suggestions
    displayImprovementSuggestions(scores, metrics);

    // Update streak
    const streakData = updateStreak();
    displayStreakCounter();

    // Display goals
    displayGoalSetting();

    // Update score history chart
    updateScoreHistoryChart();

    console.log('✅ All enhancements displayed');
  }

}

// ============================================================
// DISPLAY SCORE BREAKDOWN
// SEARCH: "SCORE_TRANSPARENCY_DISPLAY"
// ============================================================
function displayScoreBreakdown(type, scores, metrics) {
  const breakdownElement = document.getElementById(`${type}Breakdown`);
  if (!breakdownElement) return;

  let breakdown = "";

  if (type === "confidence") {
    breakdown = `
      <p><strong>Base Score:</strong> 40 points (starting baseline)</p>
      <p><strong>Filler Word Penalty:</strong> -${(metrics.fillerPercentage * 3).toFixed(1)} points (${metrics.fillerCount} fillers, ${metrics.fillerPercentage}% of speech)</p>
      ${metrics.powerWordCount > 3 ? `<p><strong>Power Words Bonus:</strong> +${Math.min(20, metrics.powerWordCount * 3)} points (used ${metrics.powerWordCount} strong action words)</p>` : ""}
      ${metrics.wordsPerMinute >= 120 && metrics.wordsPerMinute <= 160 ? `<p><strong>Speaking Pace Bonus:</strong> +15 points (${metrics.wordsPerMinute} WPM - optimal range)</p>` : ""}
      ${metrics.wordsPerMinute < 100 || metrics.wordsPerMinute > 180 ? `<p><strong>Speaking Pace Penalty:</strong> -10 points (${metrics.wordsPerMinute} WPM - outside optimal range)</p>` : ""}
      ${scores.repetitionPenalty && scores.repetitionPenalty.count > 0 ? `<p><strong>Repetition Penalty:</strong> -${scores.repetitionPenalty.points} points (${scores.repetitionPenalty.count} words repeated excessively)</p>` : ""}
      <p><strong>Final Confidence Score:</strong> ${scores.confidence}/100</p>
      <hr style="margin: 1rem 0; border: none; border-top: 1px solid var(--border-color);">
      <p style="font-size: 0.9rem; color: var(--text-muted);">💡 <strong>Tip:</strong> Reduce filler words and maintain 120-160 words per minute for higher confidence scores.</p>
    `;
  } else if (type === "authenticity") {
    breakdown = `
      <p><strong>Base Score:</strong> 50 points (starting baseline)</p>
      <p><strong>Personal Language:</strong> Analyzed use of "I", "me", "my", "we", "our"</p>
      <p><strong>Emotional Expression:</strong> Detected genuine emotional language</p>
      <p><strong>Filler Impact:</strong> -${(metrics.fillerPercentage * 1.5).toFixed(1)} points (fillers reduce perceived authenticity)</p>
      <p><strong>Final Authenticity Score:</strong> ${scores.authenticity}/100</p>
      <hr style="margin: 1rem 0; border: none; border-top: 1px solid var(--border-color);">
      <p style="font-size: 0.9rem; color: var(--text-muted);">💡 <strong>Tip:</strong> Use personal stories and emotional language to increase authenticity.</p>
    `;
  } else if (type === "engagement") {
    const uniqueWords = new Set(STATE.rawTranscript.toLowerCase().split(/\s+/)).size;
    const varietyScore = ((uniqueWords / metrics.wordCount) * 100).toFixed(1);

    breakdown = `
      <p><strong>Base Score:</strong> 35 points (starting baseline)</p>
      <p><strong>Vocabulary Variety:</strong> ${uniqueWords} unique words (${varietyScore}% variety)</p>
      <p><strong>Speaking Pace:</strong> ${metrics.wordsPerMinute} WPM ${metrics.wordsPerMinute >= 130 && metrics.wordsPerMinute <= 170 ? "(+20 optimal)" : ""}</p>
      ${metrics.powerWordCount > 0 ? `<p><strong>Power Words:</strong> +${Math.min(15, metrics.powerWordCount * 2)} points (engaging language)</p>` : ""}
      <p><strong>Final Engagement Score:</strong> ${scores.engagement}/100</p>
      <hr style="margin: 1rem 0; border: none; border-top: 1px solid var(--border-color);">
      <p style="font-size: 0.9rem; color: var(--text-muted);">💡 <strong>Tip:</strong> Vary your vocabulary and maintain an energetic pace to keep listeners engaged.</p>
    `;
  }

  breakdownElement.innerHTML = breakdown;
}

// ============================================================
// UPDATE ANALYSIS METRICS
// SEARCH: "DETAILED_METRICS_BAR_UPDATE"
// ============================================================
function updateAnalysisMetrics(metrics) {
  const pacePercentage = Math.min(100, (metrics.wordsPerMinute / 200) * 100);
  const paceFill = document.getElementById("paceFill");
  if (paceFill) paceFill.style.width = `${pacePercentage}%`;

  let paceDescription = "";
  if (metrics.wordsPerMinute < 120) {
    paceDescription = `${metrics.wordsPerMinute} WPM - Too slow. Speed up to engage listeners.`;
  } else if (metrics.wordsPerMinute <= 160) {
    paceDescription = `${metrics.wordsPerMinute} WPM - Perfect pace! Clear and engaging.`;
  } else {
    paceDescription = `${metrics.wordsPerMinute} WPM - Too fast. Slow down for clarity.`;
  }
  const paceDesc = document.getElementById("paceDescription");
  if (paceDesc) paceDesc.textContent = paceDescription;

  const powerPercentage = Math.min(100, (metrics.powerWordCount / 10) * 100);
  const powerFill = document.getElementById("powerWordsFill");
  if (powerFill) powerFill.style.width = `${powerPercentage}%`;

  const powerDesc = document.getElementById("powerWordsDescription");
  if (powerDesc) {
    powerDesc.textContent = `Found ${metrics.powerWordCount} power words. ${metrics.powerWordCount > 5 ? "Excellent use of impactful language!" : "Consider using more action-oriented words."}`;
  }

  const fillerBarPercentage = Math.min(100, metrics.fillerPercentage * 10);
  const fillerFill = document.getElementById("fillerFill");
  if (fillerFill) fillerFill.style.width = `${fillerBarPercentage}%`;

  const fillerDesc = document.getElementById("fillerDescription");
  if (fillerDesc) {
    fillerDesc.textContent = `${metrics.fillerPercentage}% filler words (${metrics.fillerCount} total). ${metrics.fillerPercentage < 2 ? "Excellent!" : metrics.fillerPercentage < 5 ? "Good, but room for improvement." : "Too many - practice eliminating these."}`;
  }

  if (STATE.scores && STATE.scores.repetitionPenalty) {
    const repData = STATE.scores.repetitionPenalty;
    const repPercentage = Math.min(100, (repData.count / 5) * 100);
    const repFill = document.getElementById("repetitionFill");
    if (repFill) repFill.style.width = `${repPercentage}%`;

    const repDesc = document.getElementById("repetitionDescription");
    if (repDesc) {
      if (repData.repeatedWords.length > 0) {
        const topRepeated = repData.repeatedWords.slice(0, 3).map(w => `"${w.word}" (${w.count}x)`).join(", ");
        repDesc.textContent = `Repeated ${repData.count} words excessively: ${topRepeated}. Vary your vocabulary.`;
      } else {
        repDesc.textContent = "Great vocabulary variety! No excessive repetition detected.";
      }
    }
  }
}

// ============================================================
// DISPLAY BASIC INSIGHTS
// SEARCH: "BASIC_INSIGHTS_GENERATION"
// ============================================================
function displayBasicInsights(scores, metrics) {
  const insightsContainer = document.getElementById("recentInsight");
  if (!insightsContainer) return;

  let insight = "";

  if (scores.confidence >= 80) {
    insight += `<h4>🎯 Strong Confident Communication</h4>`;
    insight += `<p>Your confidence score of ${scores.confidence}/100 shows you speak with authority and conviction.</p>`;
  } else if (scores.confidence >= 60) {
    insight += `<h4>💪 Solid Communication Foundation</h4>`;
    insight += `<p>Confidence score: ${scores.confidence}/100. You're doing well, with room to improve.</p>`;
  } else {
    insight += `<h4>🌱 Building Confidence</h4>`;
    insight += `<p>Confidence score: ${scores.confidence}/100. Focus on reducing filler words and speaking with conviction.</p>`;
  }

  if (metrics.fillerPercentage > 5) {
    insight += `<p><strong>Filler words:</strong> You said "um", "uh", or similar ${metrics.fillerCount} times (${metrics.fillerPercentage}%). Practice pausing silently instead.</p>`;
  }

  if (metrics.powerWordCount < 3) {
    insight += `<p><strong>Power words:</strong> Try using more action-oriented language like "achieve", "create", "build".</p>`;
  }

  insightsContainer.innerHTML = insight;
}

// ============================================================
// RUN DEEP ANALYSIS IN BACKGROUND
// SEARCH: "PHASE_2_DEEP_ANALYSIS"
// ============================================================
async function runDeepAnalysisInBackground(transcriptData, metrics) {
  console.log("🧠 Running deep analysis in background...");

  try {
    const enhancedTranscript = await enhanceTranscriptWithLLM(STATE.rawTranscript);
    STATE.enhancedTranscript = enhancedTranscript;

    if (STATE.viewMode === "enhanced") {
      const transcriptContent = document.getElementById("transcriptContent");
      if (transcriptContent) {
        transcriptContent.innerHTML = `<p style="line-height: 1.8; color: var(--text-secondary);">${enhancedTranscript}</p>`;
      }
    }

    const analyzedWords = analyzeTranscriptPsychology(transcriptData.words || [], STATE.rawTranscript);
    STATE.analyzedWords = analyzedWords;

    const llmInsights = await generateLLMInsights(STATE.rawTranscript, metrics, STATE.scores);
    STATE.insights = llmInsights;
    displayLLMInsights(llmInsights);

    const personalizedRecs = await generatePersonalizedRecommendations(STATE.rawTranscript, metrics, STATE.scores, analyzedWords);
    STATE.recommendations = personalizedRecs;
    displayPersonalizedRecommendations(personalizedRecs);

    if (STATE.currentAudio) {
      const vocalFeatures = await extractAudioFeatures(STATE.currentAudio);
      STATE.vocalFeatures = vocalFeatures;
      renderVocalCharts(vocalFeatures);
    }

    saveToHistory();
    updateScoreHistoryChart();

    console.log("✅ Deep analysis complete");
    showToast("Deep analysis complete! Enhanced insights now available.", "success");

  } catch (error) {
    console.error("Deep analysis error:", error);
  }
}

// ============================================================
// ENHANCE TRANSCRIPT WITH LLM
// SEARCH: "GROQ_LLM_TRANSCRIPT_ENHANCEMENT"
// ============================================================
async function enhanceTranscriptWithLLM(rawTranscript) {
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${CONFIG.groqApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: "You are a professional speech editor. Take the raw transcript provided (which may include filler words like 'um', 'uh', 'like') and transform it into a polished, clear version. Remove filler words, fix grammar, improve sentence flow, but keep the core message and meaning intact. Make it sound like a TED Talk. Do not add new ideas or change the meaning."
          },
          {
            role: "user",
            content: `Raw transcript:\n\n${rawTranscript}\n\nProvide the enhanced version:`
          }
        ],
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      throw new Error(`Groq API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();

  } catch (error) {
    console.error("Enhancement error:", error);
    return rawTranscript
      .replace(/\b(um|uh|like|you know|actually|basically)\b/gi, "")
      .replace(/\s+/g, " ")
      .trim();
  }
}

// ============================================================
// ANALYZE TRANSCRIPT PSYCHOLOGY
// SEARCH: "WORD_BY_WORD_PSYCHOLOGY_TAGGING"
// ============================================================
function analyzeTranscriptPsychology(words, rawTranscript) {
  const analyzedWords = [];

  const fillerWords = ["um", "uh", "like", "you know", "actually", "basically"];
  const powerWords = ["achieve", "create", "build", "develop", "improve", "succeed", "innovate", "transform", "deliver", "lead"];
  const confidenceMarkers = ["definitely", "absolutely", "certainly", "confident", "sure", "believe", "know"];
  const uncertaintyMarkers = ["maybe", "perhaps", "might", "could", "think", "guess", "probably"];

  const transcriptWords = rawTranscript.toLowerCase().split(/\s+/);

  transcriptWords.forEach((word, index) => {
    const cleanWord = word.replace(/[^a-z]/g, "");

    let psychology = "neutral";
    let emotion = "neutral";
    let isFiller = false;
    let isPower = false;

    if (fillerWords.includes(cleanWord)) {
      psychology = "low";
      emotion = "uncertain";
      isFiller = true;
    } else if (powerWords.includes(cleanWord)) {
      psychology = "high";
      emotion = "confident";
      isPower = true;
    } else if (confidenceMarkers.includes(cleanWord)) {
      psychology = "high";
      emotion = "confident";
    } else if (uncertaintyMarkers.includes(cleanWord)) {
      psychology = "low";
      emotion = "uncertain";
    }

    analyzedWords.push({
      word: word,
      index: index,
      psychology: psychology,
      emotion: emotion,
      isFiller: isFiller,
      isPower: isPower,
      timestamp: words[index]?.start || 0
    });
  });

  return analyzedWords;
}

// ============================================================
// GENERATE LLM INSIGHTS (NEW FEATURE)
// SEARCH: "LLM_PERSONALIZED_INSIGHTS"
// ============================================================
async function generateLLMInsights(transcript, metrics, scores) {
  try {
    const prompt = `You are a communication psychology expert analyzing a speech transcript.

Transcript: "${transcript}"

Metrics:
- Word count: ${metrics.wordCount}
- Filler words: ${metrics.fillerCount} (${metrics.fillerPercentage}%)
- Power words: ${metrics.powerWordCount}
- Speaking pace: ${metrics.wordsPerMinute} WPM

Scores:
- Confidence: ${scores.confidence}/100
- Authenticity: ${scores.authenticity}/100
- Engagement: ${scores.engagement}/100

Provide 3-4 specific, actionable insights about this person's communication style. Format each as JSON:
{
  "type": "positive" | "warning" | "tip",
  "title": "Brief title",
  "description": "2-3 sentences with specific reference to moments in the transcript"
}

Be encouraging but honest. Reference specific moments or patterns. Return ONLY valid JSON array.`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${CONFIG.groqApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: "You are a communication expert. Respond ONLY with valid JSON arrays." },
          { role: "user", content: prompt }
        ],
        temperature: 0.8,
        max_tokens: 800
      })
    });

    if (!response.ok) {
      throw new Error(`Groq API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content.trim();

    const jsonMatch = content.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }

    return generateFallbackInsights(metrics, scores);

  } catch (error) {
    console.error("LLM insights error:", error);
    return generateFallbackInsights(metrics, scores);
  }
}

// ============================================================
// GENERATE FALLBACK INSIGHTS
// SEARCH: "FALLBACK_INSIGHTS_TEMPLATE"
// ============================================================
function generateFallbackInsights(metrics, scores) {
  const insights = [];

  if (scores.confidence >= 70) {
    insights.push({
      type: "positive",
      title: "Strong Confidence Detected",
      description: `Your confidence score of ${scores.confidence}/100 shows you communicate with conviction. You used ${metrics.powerWordCount} power words effectively.`
    });
  } else {
    insights.push({
      type: "warning",
      title: "Build Your Confidence",
      description: `Your confidence score is ${scores.confidence}/100. You used ${metrics.fillerCount} filler words (${metrics.fillerPercentage}%). Practice pausing instead of saying "um" or "uh".`
    });
  }

  if (metrics.fillerPercentage > 5) {
    insights.push({
      type: "tip",
      title: "Reduce Filler Words",
      description: `${metrics.fillerPercentage}% of your speech was filler words. Record yourself and become aware of when you say them. Practice pausing silently for 1-2 seconds instead.`
    });
  }

  if (metrics.wordsPerMinute < 120 || metrics.wordsPerMinute > 170) {
    insights.push({
      type: "tip",
      title: "Adjust Your Speaking Pace",
      description: `You spoke at ${metrics.wordsPerMinute} words per minute. Aim for 120-160 WPM for optimal clarity and engagement.`
    });
  }

  return insights;
}

// ============================================================
// GENERATE PERSONALIZED RECOMMENDATIONS
// SEARCH: "LLM_PERSONALIZED_PRACTICE_PLAN"
// ============================================================
async function generatePersonalizedRecommendations(transcript, metrics, scores, analyzedWords) {
  try {
    const problemAreas = [];

    if (metrics.fillerPercentage > 3) {
      problemAreas.push(`Filler words: ${metrics.fillerCount} instances (${metrics.fillerPercentage}%)`);
    }
    if (metrics.wordsPerMinute < 120 || metrics.wordsPerMinute > 170) {
      problemAreas.push(`Speaking pace: ${metrics.wordsPerMinute} WPM (target: 120-160)`);
    }
    if (scores.confidence < 70) {
      problemAreas.push(`Confidence level: ${scores.confidence}/100`);
    }
    if (scores.repetitionPenalty && scores.repetitionPenalty.count > 0) {
      problemAreas.push(`Repetitive language: ${scores.repetitionPenalty.count} words overused`);
    }

    const prompt = `You are a communication coach creating a personalized practice plan.

Speech transcript: "${transcript.substring(0, 500)}..."

Current issues:
${problemAreas.join('\n')}

Create 3 specific, actionable practice exercises to address these issues. Each exercise should:
1. Target the specific problem
2. Be completable in 5-10 minutes
3. Include concrete steps

Format as JSON array:
[{
  "priority": "high" | "medium" | "low",
  "title": "Exercise name",
  "description": "2-3 sentences explaining what to do and why",
  "timeEstimate": "X minutes"
}]

Return ONLY valid JSON.`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${CONFIG.groqApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: "You are a communication coach. Respond with valid JSON only." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 600
      })
    });

    if (!response.ok) {
      throw new Error(`Groq API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content.trim();

    const jsonMatch = content.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }

    return generateFallbackRecommendations(metrics, scores);

  } catch (error) {
    console.error("Personalized recommendations error:", error);
    return generateFallbackRecommendations(metrics, scores);
  }
}

// ============================================================
// GENERATE FALLBACK RECOMMENDATIONS
// SEARCH: "FALLBACK_RECOMMENDATIONS_TEMPLATE"
// ============================================================
function generateFallbackRecommendations(metrics, scores) {
  const recommendations = [];

  if (metrics.fillerPercentage > 3) {
    recommendations.push({
      priority: "high",
      title: "Silent Pause Practice",
      description: "Record yourself reading a paragraph. Every time you feel the urge to say 'um' or 'uh', pause silently for 2 seconds instead. Listen back and notice how pauses sound more confident than fillers.",
      timeEstimate: "10 minutes"
    });
  }

  if (metrics.wordsPerMinute < 120) {
    recommendations.push({
      priority: "medium",
      title: "Speed Reading Exercise",
      description: "Read a news article out loud, timing yourself. Aim to increase your pace to 130-140 WPM. Focus on maintaining clarity while speaking faster.",
      timeEstimate: "8 minutes"
    });
  } else if (metrics.wordsPerMinute > 170) {
    recommendations.push({
      priority: "medium",
      title: "Slow Down Practice",
      description: "Record yourself explaining a concept at your normal pace, then re-record it 20% slower. The slower version will likely sound perfect to listeners.",
      timeEstimate: "10 minutes"
    });
  }

  if (scores.confidence < 70) {
    recommendations.push({
      priority: "high",
      title: "Power Word Integration",
      description: "Choose 3 power words (achieve, create, transform). Practice using each in 5 different sentences related to your work. Notice how these words boost perceived confidence.",
      timeEstimate: "7 minutes"
    });
  }

  return recommendations;
}

// ============================================================
// DISPLAY LLM INSIGHTS
// SEARCH: "LLM_INSIGHTS_DISPLAY_UI"
// ============================================================
function displayLLMInsights(insights) {
  const container = document.getElementById("recommendationsContainer");
  if (!container) return;

  container.innerHTML = "";

  insights.forEach(insight => {
    const card = document.createElement("div");
    card.className = "recommendation-card fade-in";

    let priorityClass = "";
    let priorityColor = "";

    if (insight.type === "positive") {
      priorityClass = "✅";
      priorityColor = "#10b981";
    } else if (insight.type === "warning") {
      priorityClass = "⚠️";
      priorityColor = "#f59e0b";
    } else {
      priorityClass = "💡";
      priorityColor = "#3b82f6";
    }

    card.innerHTML = `
      <div class="recommendation-priority" style="background: rgba(${priorityColor === '#10b981' ? '16, 185, 129' : priorityColor === '#f59e0b' ? '245, 158, 11' : '59, 130, 246'}, 0.2); color: ${priorityColor}; border-color: ${priorityColor}">
        ${priorityClass} ${insight.type}
      </div>
      <h4>${insight.title}</h4>
      <p>${insight.description}</p>
    `;

    container.appendChild(card);
  });
}

// ============================================================
// DISPLAY PERSONALIZED RECOMMENDATIONS
// SEARCH: "PERSONALIZED_PRACTICE_PLAN_DISPLAY"
// ============================================================
function displayPersonalizedRecommendations(recommendations) {
  const section = document.getElementById("practiceRecommendations");
  const container = document.getElementById("practiceRecommendationsContainer");

  if (!section || !container || recommendations.length === 0) return;

  section.style.display = "block";
  container.innerHTML = "";

  recommendations.forEach(rec => {
    const card = document.createElement("div");
    card.className = "practice-recommendation-card slide-up";

    const priorityEmoji = rec.priority === "high" ? "🔥" : rec.priority === "medium" ? "⭐" : "💪";

    card.innerHTML = `
      <h4>${priorityEmoji} ${rec.title}</h4>
      <p>${rec.description}</p>
      <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.5rem;">
        ⏱️ Time: ${rec.timeEstimate}
      </p>
    `;

    container.appendChild(card);
  });
}

// ============================================================
// EXTRACT AUDIO FEATURES (VOCAL ANALYSIS)
// SEARCH: "AUDIO_FEATURE_EXTRACTION_PITCH_ENERGY"
// ============================================================
async function extractAudioFeatures(audioBlob) {
  return new Promise((resolve, reject) => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const fileReader = new FileReader();

    fileReader.onload = async (e) => {
      try {
        const arrayBuffer = e.target.result;
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        const channelData = audioBuffer.getChannelData(0);
        const sampleRate = audioBuffer.sampleRate;
        const duration = audioBuffer.duration;

        const features = {
          pitch: extractPitchContour(channelData, sampleRate),
          energy: extractEnergyEnvelope(channelData, sampleRate),
          pauses: detectPauses(channelData, sampleRate),
          duration: duration
        };

        resolve(features);
      } catch (error) {
        console.error("Audio feature extraction error:", error);
        reject(error);
      }
    };

    fileReader.readAsArrayBuffer(audioBlob);
  });
}

// ============================================================
// EXTRACT PITCH CONTOUR
// SEARCH: "PITCH_FREQUENCY_ANALYSIS"
// ============================================================
function extractPitchContour(channelData, sampleRate) {
  const pitchData = [];
  const windowSize = 2048;
  const hopSize = 512;

  for (let i = 0; i < channelData.length - windowSize; i += hopSize) {
    const window = channelData.slice(i, i + windowSize);
    const pitch = estimatePitch(window, sampleRate);
    const timeStamp = i / sampleRate;

    if (pitch > 50 && pitch < 500) {
      pitchData.push({ time: timeStamp, pitch: pitch });
    }
  }

  return pitchData;
}

// ============================================================
// ESTIMATE PITCH (AUTOCORRELATION)
// SEARCH: "AUTOCORRELATION_PITCH_DETECTION"
// ============================================================
function estimatePitch(buffer, sampleRate) {
  const minPeriod = Math.floor(sampleRate / 500);
  const maxPeriod = Math.floor(sampleRate / 50);

  let bestPeriod = 0;
  let bestCorrelation = 0;

  for (let period = minPeriod; period < maxPeriod; period++) {
    let correlation = 0;
    for (let i = 0; i < buffer.length - period; i++) {
      correlation += Math.abs(buffer[i] - buffer[i + period]);
    }
    correlation = 1 - (correlation / (buffer.length - period));

    if (correlation > bestCorrelation) {
      bestCorrelation = correlation;
      bestPeriod = period;
    }
  }

  return bestPeriod > 0 ? sampleRate / bestPeriod : 0;
}

// ============================================================
// EXTRACT ENERGY ENVELOPE
// SEARCH: "RMS_ENERGY_CALCULATION"
// ============================================================
function extractEnergyEnvelope(channelData, sampleRate) {
  const energyData = [];
  const windowSize = 2048;
  const hopSize = 512;

  for (let i = 0; i < channelData.length - windowSize; i += hopSize) {
    const window = channelData.slice(i, i + windowSize);

    let sumSquares = 0;
    for (let j = 0; j < window.length; j++) {
      sumSquares += window[j] * window[j];
    }
    const rms = Math.sqrt(sumSquares / window.length);
    const timeStamp = i / sampleRate;

    energyData.push({ time: timeStamp, energy: rms });
  }

  return energyData;
}

// ============================================================
// DETECT PAUSES
// SEARCH: "SILENCE_PAUSE_DETECTION"
// ============================================================
function detectPauses(channelData, sampleRate) {
  const pauses = [];
  const threshold = 0.02;
  const minPauseDuration = 0.3;

  let inPause = false;
  let pauseStart = 0;

  for (let i = 0; i < channelData.length; i++) {
    const amplitude = Math.abs(channelData[i]);
    const timeStamp = i / sampleRate;

    if (amplitude < threshold && !inPause) {
      inPause = true;
      pauseStart = timeStamp;
    } else if (amplitude >= threshold && inPause) {
      const pauseDuration = timeStamp - pauseStart;
      if (pauseDuration >= minPauseDuration) {
        pauses.push({
          start: pauseStart,
          end: timeStamp,
          duration: pauseDuration
        });
      }
      inPause = false;
    }
  }

  return pauses;
}

// ============================================================
// RENDER VOCAL CHARTS (DARK THEME FIXED)
// SEARCH: "VOCAL_TIMELINE_CHARTS_CANVAS_DARK"
// ============================================================
function renderVocalCharts(vocalFeatures) {
  const chartsSection = document.getElementById("vocalChartsSection");
  if (!chartsSection) return;

  chartsSection.style.display = "block";

  renderPitchChart(vocalFeatures.pitch);
  renderEnergyChart(vocalFeatures.energy);
  renderPauseMarkers(vocalFeatures.pauses, vocalFeatures.duration);
}

// ============================================================
// RENDER PITCH CHART (DARK THEME)
// SEARCH: "PITCH_CONTOUR_CANVAS_DRAWING_DARK"
// ============================================================
function renderPitchChart(pitchData) {
  const canvas = document.getElementById("pitchChart");
  if (!canvas || pitchData.length === 0) return;

  const ctx = canvas.getContext("2d");
  const width = canvas.offsetWidth;
  const height = 200;
  canvas.width = width;
  canvas.height = height;

  // DARK BACKGROUND
  ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
  ctx.fillRect(0, 0, width, height);

  const pitches = pitchData.map(d => d.pitch);
  const minPitch = Math.min(...pitches);
  const maxPitch = Math.max(...pitches);
  const pitchRange = maxPitch - minPitch;

  // Grid
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = (height / 4) * i;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Pitch line
  ctx.beginPath();
  ctx.strokeStyle = "#10b981";
  ctx.lineWidth = 2;

  pitchData.forEach((point, index) => {
    const x = (point.time / pitchData[pitchData.length - 1].time) * width;
    const y = height - ((point.pitch - minPitch) / pitchRange) * (height - 20) - 10;

    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });

  ctx.stroke();

  // Labels
  ctx.fillStyle = "#e0e0e0";
  ctx.font = "12px -apple-system, sans-serif";
  ctx.fillText(`${Math.round(maxPitch)} Hz`, 10, 20);
  ctx.fillText(`${Math.round(minPitch)} Hz`, 10, height - 10);
}

// ============================================================
// RENDER ENERGY CHART (DARK THEME)
// SEARCH: "ENERGY_VOLUME_CHART_DRAWING_DARK"
// ============================================================
function renderEnergyChart(energyData) {
  const canvas = document.getElementById("energyChart");
  if (!canvas || energyData.length === 0) return;

  const ctx = canvas.getContext("2d");
  const width = canvas.offsetWidth;
  const height = 200;
  canvas.width = width;
  canvas.height = height;

  // DARK BACKGROUND
  ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
  ctx.fillRect(0, 0, width, height);

  const maxEnergy = Math.max(...energyData.map(d => d.energy));

  // Grid
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = (height / 4) * i;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Area chart
  ctx.beginPath();
  ctx.moveTo(0, height);

  energyData.forEach((point, index) => {
    const x = (point.time / energyData[energyData.length - 1].time) * width;
    const y = height - (point.energy / maxEnergy) * (height - 20) - 10;
    ctx.lineTo(x, y);
  });

  ctx.lineTo(width, height);
  ctx.closePath();

  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "rgba(59, 130, 246, 0.5)");
  gradient.addColorStop(1, "rgba(59, 130, 246, 0.1)");
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.beginPath();
  energyData.forEach((point, index) => {
    const x = (point.time / energyData[energyData.length - 1].time) * width;
    const y = height - (point.energy / maxEnergy) * (height - 20) - 10;

    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.strokeStyle = "#3b82f6";
  ctx.lineWidth = 2;
  ctx.stroke();
}

// ============================================================
// RENDER PAUSE MARKERS
// SEARCH: "PAUSE_VISUALIZATION_DISPLAY"
// ============================================================
function renderPauseMarkers(pauses, duration) {
  const container = document.getElementById("pauseMarkers");
  if (!container) return;

  if (pauses.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 2rem;">No significant pauses detected (>0.3s)</p>`;
    return;
  }

  container.innerHTML = "";

  const timeline = document.createElement("div");
  timeline.style.cssText = "position: relative; height: 60px; background: rgba(255, 255, 255, 0.05); border-radius: 8px; overflow: hidden;";

  pauses.forEach(pause => {
    const marker = document.createElement("div");
    const leftPercent = (pause.start / duration) * 100;
    const widthPercent = ((pause.end - pause.start) / duration) * 100;

    marker.style.cssText = `
      position: absolute;
      left: ${leftPercent}%;
      width: ${Math.max(widthPercent, 1)}%;
      height: 100%;
      background: rgba(239, 68, 68, 0.6);
      border-left: 2px solid #ef4444;
      cursor: pointer;
      transition: all 0.2s ease;
    `;

    marker.title = `Pause: ${pause.duration.toFixed(2)}s at ${pause.start.toFixed(1)}s`;

    marker.addEventListener("mouseenter", function () {
      this.style.background = "rgba(239, 68, 68, 0.9)";
    });

    marker.addEventListener("mouseleave", function () {
      this.style.background = "rgba(239, 68, 68, 0.6)";
    });

    marker.addEventListener("click", () => {
      const audioPlayer = document.getElementById("audioPlayer");
      if (audioPlayer) {
        audioPlayer.currentTime = pause.start;
        audioPlayer.play();
      }
    });

    timeline.appendChild(marker);
  });

  container.appendChild(timeline);

  const pauseInfo = document.createElement("p");
  pauseInfo.style.cssText = "margin-top: 1rem; color: var(--text-secondary); font-size: 0.9rem;";
  pauseInfo.textContent = `Found ${pauses.length} pauses. Click on a pause to jump to that moment in the audio.`;
  container.appendChild(pauseInfo);
}

/* ============================================================
   INITIALIZE PRACTICE MODE - ENHANCED
   SEARCH: "PRACTICE_MODE_INIT_ENHANCED"
   Adds filtering, favorites, difficulty badges, history tracking
   ============================================================ */

function initializePracticeMode() {
  const scriptGrid = document.getElementById('scriptGrid');
  if (!scriptGrid) return;

  // Load favorites and history from localStorage
  const favorites = JSON.parse(localStorage.getItem('cipher-favorites')) || [];
  const practiceHistory = JSON.parse(localStorage.getItem('cipher-practice-history')) || {};

  // Clear grid
  scriptGrid.innerHTML = '';

  // Render all scripts with enhancements
  PRACTICE_SCRIPTS.forEach(script => {
    const isFavorite = favorites.includes(script.id);
    const history = practiceHistory[script.id] || { practiced: 0, bestScore: 0 };

    // Difficulty badge colors
    const difficultyColors = {
      beginner: '#10b981',
      intermediate: '#f59e0b',
      advanced: '#ef4444'
    };

    const difficultyIcons = {
      beginner: '🟢',
      intermediate: '🟡',
      advanced: '🔴'
    };

    const card = document.createElement('div');
    card.className = 'script-card';
    card.setAttribute('data-category', script.category);
    card.setAttribute('data-difficulty', script.difficulty);
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
        <div>
          <span style="display: inline-block; padding: 0.25rem 0.75rem; background: ${difficultyColors[script.difficulty]}30; border: 1px solid ${difficultyColors[script.difficulty]}60; border-radius: 8px; font-size: 0.75rem; color: ${difficultyColors[script.difficulty]}; margin-bottom: 0.5rem;">
            ${difficultyIcons[script.difficulty]} ${script.difficulty.charAt(0).toUpperCase() + script.difficulty.slice(1)}
          </span>
        </div>
        <button 
          onclick="toggleFavorite(${script.id})" 
          style="background: none; border: none; font-size: 1.5rem; cursor: pointer; padding: 0; transition: transform 0.2s;"
          onmouseover="this.style.transform='scale(1.2)'"
          onmouseout="this.style.transform='scale(1)'"
        >
          ${isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      
      <h3>${script.title}</h3>
      <p>${script.text.substring(0, 120)}...</p>
      
      <div class="script-info">
        <span>⏱️ ${script.duration}s</span>
        <span>📝 ${script.wordCount} words</span>
      </div>

      ${history.practiced > 0 ? `
        <div style="margin-top: 0.75rem; padding: 0.5rem; background: rgba(118, 75, 162, 0.1); border-radius: 8px; font-size: 0.85rem;">
          <span style="color: #a78bfa;">Practiced ${history.practiced}x</span>
          ${history.bestScore > 0 ? ` • <span style="color: #10b981;">Best: ${history.bestScore}%</span>` : ''}
        </div>
      ` : ''}
      
      <button onclick="selectScript(${script.id})" class="btn-modern btn-modern-primary" style="width: 100%; margin-top: 1rem;">
        Start Practice
      </button>
    `;

    scriptGrid.appendChild(card);
  });

  console.log('✅ Practice mode initialized with 50 scripts');
}

/* ============================================================
   FILTER SCRIPTS
   SEARCH: "FILTER_SCRIPTS_FUNCTION"
   Filter by category and difficulty
   ============================================================ */

function filterScripts() {
  const categoryFilter = document.getElementById('categoryFilter').value;
  const difficultyFilter = document.getElementById('difficultyFilter').value;
  const cards = document.querySelectorAll('.script-card');

  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    const difficulty = card.getAttribute('data-difficulty');

    const categoryMatch = categoryFilter === 'all' || category === categoryFilter;
    const difficultyMatch = difficultyFilter === 'all' || difficulty === difficultyFilter;

    if (categoryMatch && difficultyMatch) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

/* ============================================================
   CLEAR FILTERS
   SEARCH: "CLEAR_FILTERS_FUNCTION"
   Reset all filters to default
   ============================================================ */

function clearFilters() {
  document.getElementById('categoryFilter').value = 'all';
  document.getElementById('difficultyFilter').value = 'all';
  filterScripts();
}

/* ============================================================
   TOGGLE FAVORITE
   SEARCH: "TOGGLE_FAVORITE_FUNCTION"
   Add/remove scripts from favorites
   ============================================================ */

function toggleFavorite(scriptId) {
  let favorites = JSON.parse(localStorage.getItem('cipher-favorites')) || [];

  if (favorites.includes(scriptId)) {
    // Remove from favorites
    favorites = favorites.filter(id => id !== scriptId);
  } else {
    // Add to favorites
    favorites.push(scriptId);
  }

  localStorage.setItem('cipher-favorites', JSON.stringify(favorites));

  // Re-render to update heart icon
  initializePracticeMode();

  console.log(`${favorites.includes(scriptId) ? '❤️ Added to' : '🤍 Removed from'} favorites: Script ${scriptId}`);
}

/* ============================================================
   SHOW FAVORITES
   SEARCH: "SHOW_FAVORITES_FUNCTION"
   Display only favorited scripts
   ============================================================ */

function showFavorites() {
  // Update active button
  document.querySelectorAll('.practice-mode-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('btnFavorites').classList.add('active');

  // Hide other views
  document.getElementById('scriptLibraryView').style.display = 'none';
  document.getElementById('customScriptView').style.display = 'none';
  document.getElementById('practiceFilters').style.display = 'none';

  // Show favorites view
  document.getElementById('favoritesView').style.display = 'block';

  // Load favorites
  const favorites = JSON.parse(localStorage.getItem('cipher-favorites')) || [];
  const practiceHistory = JSON.parse(localStorage.getItem('cipher-practice-history')) || {};
  const favoritesGrid = document.getElementById('favoritesGrid');

  if (favorites.length === 0) {
    favoritesGrid.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: var(--text-muted); grid-column: 1 / -1;">
        <h3 style="color: var(--text-secondary);">No Favorites Yet</h3>
        <p>Click the ❤️ icon on any script to add it to your favorites!</p>
        <button onclick="showScriptLibrary()" class="btn-modern btn-modern-primary" style="margin-top: 1rem;">
          Browse Scripts
        </button>
      </div>
    `;
    return;
  }

  // Render favorite scripts
  favoritesGrid.innerHTML = '';

  PRACTICE_SCRIPTS.filter(s => favorites.includes(s.id)).forEach(script => {
    const history = practiceHistory[script.id] || { practiced: 0, bestScore: 0 };

    const difficultyColors = {
      beginner: '#10b981',
      intermediate: '#f59e0b',
      advanced: '#ef4444'
    };

    const difficultyIcons = {
      beginner: '🟢',
      intermediate: '🟡',
      advanced: '🔴'
    };

    const card = document.createElement('div');
    card.className = 'script-card';
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
        <span style="display: inline-block; padding: 0.25rem 0.75rem; background: ${difficultyColors[script.difficulty]}30; border: 1px solid ${difficultyColors[script.difficulty]}60; border-radius: 8px; font-size: 0.75rem; color: ${difficultyColors[script.difficulty]};">
          ${difficultyIcons[script.difficulty]} ${script.difficulty.charAt(0).toUpperCase() + script.difficulty.slice(1)}
        </span>
        <button 
          onclick="toggleFavorite(${script.id})" 
          style="background: none; border: none; font-size: 1.5rem; cursor: pointer; padding: 0;"
        >
          ❤️
        </button>
      </div>
      
      <h3>${script.title}</h3>
      <p>${script.text.substring(0, 120)}...</p>
      
      <div class="script-info">
        <span>⏱️ ${script.duration}s</span>
        <span>📝 ${script.wordCount} words</span>
      </div>

      ${history.practiced > 0 ? `
        <div style="margin-top: 0.75rem; padding: 0.5rem; background: rgba(118, 75, 162, 0.1); border-radius: 8px; font-size: 0.85rem;">
          <span style="color: #a78bfa;">Practiced ${history.practiced}x</span>
          ${history.bestScore > 0 ? ` • <span style="color: #10b981;">Best: ${history.bestScore}%</span>` : ''}
        </div>
      ` : ''}
      
      <button onclick="selectScript(${script.id})" class="btn-modern btn-modern-primary" style="width: 100%; margin-top: 1rem;">
        Start Practice
      </button>
    `;

    favoritesGrid.appendChild(card);
  });
}

/* ============================================================
   SELECT RANDOM SCRIPT
   SEARCH: "RANDOM_SCRIPT_FUNCTION"
   Pick a random script and start practice
   ============================================================ */

function selectRandomScript() {
  const randomIndex = Math.floor(Math.random() * PRACTICE_SCRIPTS.length);
  const randomScript = PRACTICE_SCRIPTS[randomIndex];
  selectScript(randomScript.id);
}

/* ============================================================
   UPDATE PRACTICE HISTORY
   SEARCH: "UPDATE_PRACTICE_HISTORY"
   Track practice count and best scores
   ============================================================ */

function updatePracticeHistory(scriptId, accuracy) {
  let history = JSON.parse(localStorage.getItem('cipher-practice-history')) || {};

  if (!history[scriptId]) {
    history[scriptId] = { practiced: 0, bestScore: 0 };
  }

  history[scriptId].practiced += 1;

  if (accuracy > history[scriptId].bestScore) {
    history[scriptId].bestScore = accuracy;
  }

  localStorage.setItem('cipher-practice-history', JSON.stringify(history));

  console.log(`📊 Updated history for script ${scriptId}: ${history[scriptId].practiced} practices, best ${history[scriptId].bestScore}%`);
}

/* ============================================================
   SHOW SCRIPT LIBRARY - FIXED
   SEARCH: "SHOW_SCRIPT_LIBRARY_FIXED"
   Properly shows library with filters visible
   ============================================================ */

function showScriptLibrary() {
  // Update active button
  document.querySelectorAll('.practice-mode-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('btnLibraryScripts').classList.add('active');

  // Show library view and filters
  document.getElementById('scriptLibraryView').style.display = 'block';
  document.getElementById('customScriptView').style.display = 'none';
  document.getElementById('favoritesView').style.display = 'none';
  document.getElementById('practiceFilters').style.display = 'flex';
  document.getElementById('practiceRecordingInterface').style.display = 'none';
  document.getElementById('practiceComparisonResults').style.display = 'none';

  // Initialize if needed
  const scriptGrid = document.getElementById('scriptGrid');
  if (!scriptGrid || scriptGrid.children.length === 0) {
    initializePracticeMode();
  }

  console.log('📚 Script library displayed');
}



// ============================================================
// SHOW SCRIPT LIBRARY VIEW
// SEARCH: "PRACTICE_LIBRARY_VIEW_TOGGLE"
// ============================================================
function showScriptLibrary() {
  STATE.practiceMode = "library";

  const btnLibrary = document.getElementById("btnLibraryScripts");
  const btnCustom = document.getElementById("btnCustomScript");

  if (btnLibrary) btnLibrary.classList.add("active");
  if (btnCustom) btnCustom.classList.remove("active");

  const libraryView = document.getElementById("scriptLibraryView");
  const customView = document.getElementById("customScriptView");
  const recordingInterface = document.getElementById("practiceRecordingInterface");
  const comparisonResults = document.getElementById("practiceComparisonResults");

  if (libraryView) libraryView.style.display = "block";
  if (customView) customView.style.display = "none";
  if (recordingInterface) recordingInterface.style.display = "none";
  if (comparisonResults) comparisonResults.style.display = "none";
}

// ============================================================
// SHOW CUSTOM SCRIPT VIEW
// SEARCH: "PRACTICE_CUSTOM_VIEW_TOGGLE"
// ============================================================
/* ============================================================
   SHOW CUSTOM SCRIPT - FIXED
   SEARCH: "SHOW_CUSTOM_SCRIPT_FIXED"
   Enables custom script creation
   ============================================================ */

function showCustomScript() {
  // Update active button
  document.querySelectorAll('.practice-mode-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('btnCustomScript').classList.add('active');

  // Show custom view
  document.getElementById('scriptLibraryView').style.display = 'none';
  document.getElementById('customScriptView').style.display = 'block';
  document.getElementById('favoritesView').style.display = 'none';
  document.getElementById('practiceFilters').style.display = 'none';
  document.getElementById('practiceRecordingInterface').style.display = 'none';
  document.getElementById('practiceComparisonResults').style.display = 'none';

  // Set up custom script listeners
  const customTextArea = document.getElementById('customScriptText');
  const customTitle = document.getElementById('customScriptTitle');
  const startBtn = document.getElementById('startCustomPracticeBtn');

  if (!customTextArea.dataset.listenerAttached) {
    customTextArea.addEventListener('input', () => {
      const text = customTextArea.value.trim();
      const words = text.split(/\s+/).filter(w => w.length > 0);
      const wordCount = words.length;
      const estimatedTime = Math.ceil(wordCount / 2.5); // Assume 150 WPM

      document.getElementById('customWordCount').textContent = wordCount;
      document.getElementById('customEstimatedTime').textContent =
        `${Math.floor(estimatedTime / 60)}:${(estimatedTime % 60).toString().padStart(2, '0')}`;

      if (wordCount >= 10 && wordCount <= 500) {
        document.getElementById('customScriptStatus').textContent = '✅ Ready to practice';
        document.getElementById('customScriptStatus').style.color = '#10b981';
        startBtn.disabled = false;
      } else if (wordCount > 500) {
        document.getElementById('customScriptStatus').textContent = '⚠️ Too long (max 500 words)';
        document.getElementById('customScriptStatus').style.color = '#f59e0b';
        startBtn.disabled = true;
      } else {
        document.getElementById('customScriptStatus').textContent = `Need ${10 - wordCount} more words`;
        document.getElementById('customScriptStatus').style.color = '#94a3b8';
        startBtn.disabled = true;
      }
    });

    startBtn.addEventListener('click', () => {
      const title = customTitle.value.trim() || 'My Custom Script';
      const text = customTextArea.value.trim();
      const words = text.split(/\s+/).filter(w => w.length > 0);

      // Create temporary custom script
      STATE.currentPracticeScript = {
        id: 'custom',
        title: title,
        text: text,
        wordCount: words.length,
        duration: Math.ceil(words.length / 2.5),
        category: 'custom',
        difficulty: 'intermediate'
      };

      // Use selectScript logic but with custom script
      selectScript('custom');
    });

    customTextArea.dataset.listenerAttached = 'true';
  }

  console.log('✍️ Custom script view displayed');
}

// ============================================================
// SELECT SCRIPT (FIXED)
// SEARCH: "SCRIPT_SELECTION_HANDLER_FIX"
// ============================================================
/* ============================================================
   SELECT SCRIPT - FIXED
   SEARCH: "SELECT_SCRIPT_FIXED"
   Properly displays script with all info
   ============================================================ */

function selectScript(scriptId) {
  const script = PRACTICE_SCRIPTS.find(s => s.id === scriptId);
  if (!script) {
    console.error('Script not found:', scriptId);
    return;
  }

  STATE.currentPracticeScript = script;

  // Hide library views
  document.getElementById('scriptLibraryView').style.display = 'none';
  document.getElementById('customScriptView').style.display = 'none';
  document.getElementById('favoritesView').style.display = 'none';
  document.getElementById('practiceFilters').style.display = 'none';

  // Show recording interface
  const recordingInterface = document.getElementById('practiceRecordingInterface');
  recordingInterface.style.display = 'block';

  // Difficulty colors
  const difficultyColors = {
    beginner: { bg: 'rgba(16, 185, 129, 0.2)', border: 'rgba(16, 185, 129, 0.4)', text: '#10b981' },
    intermediate: { bg: 'rgba(245, 158, 11, 0.2)', border: 'rgba(245, 158, 11, 0.4)', text: '#f59e0b' },
    advanced: { bg: 'rgba(239, 68, 68, 0.2)', border: 'rgba(239, 68, 68, 0.4)', text: '#ef4444' }
  };

  const difficultyIcons = {
    beginner: '🟢',
    intermediate: '🟡',
    advanced: '🔴'
  };

  const diff = difficultyColors[script.difficulty];

  // Update script display with header
  const scriptHeader = `
    <div class="practice-script-header">
      <div style="margin-bottom: 0.5rem;">
        <span class="script-difficulty-badge" style="background: ${diff.bg}; border: 1px solid ${diff.border}; color: ${diff.text};">
          ${difficultyIcons[script.difficulty]} ${script.difficulty.charAt(0).toUpperCase() + script.difficulty.slice(1)}
        </span>
      </div>
      <h3>${script.title}</h3>
      <div class="practice-script-meta">
        <span>⏱️ Duration: <strong style="color: #f8fafc;">${script.duration}s</strong></span>
        <span>📝 Words: <strong style="color: #f8fafc;">${script.wordCount}</strong></span>
        <span>📂 Category: <strong style="color: #f8fafc;">${getCategoryName(script.category)}</strong></span>
      </div>
    </div>
  `;

  // Find the card and insert header before script text
  const card = recordingInterface.querySelector('.card-modern');
  const existingHeader = card.querySelector('.practice-script-header');
  if (existingHeader) existingHeader.remove();

  // Insert after the h3 title
  const h3 = card.querySelector('h3');
  h3.insertAdjacentHTML('afterend', scriptHeader);
  h3.style.display = 'none'; // Hide duplicate title

  // Update script content
  document.getElementById('practiceScriptText').textContent = script.text;
  document.getElementById('practiceEstimatedTime').textContent = `${script.duration} seconds`;
  document.getElementById('practiceWordCount').textContent = script.wordCount;

  // Reset recording state
  document.getElementById('startPracticeRecordBtn').style.display = 'block';
  document.getElementById('stopPracticeRecordBtn').style.display = 'none';
  document.getElementById('recordingTimer').style.display = 'none';
  document.getElementById('practiceComparisonResults').style.display = 'none';

  // Scroll to script
  recordingInterface.scrollIntoView({ behavior: 'smooth', block: 'center' });

  console.log('✅ Script selected:', script.title);
}

/* ============================================================
   GET CATEGORY NAME
   SEARCH: "GET_CATEGORY_NAME"
   Convert category code to display name
   ============================================================ */

function getCategoryName(category) {
  const names = {
    'class': 'Class Presentations',
    'friends': 'Friend Conversations',
    'dating': 'Relationship Talks',
    'social': 'Social Events',
    'study': 'Study Groups',
    'teacher': 'Teacher Interactions',
    'career': 'Job/Internship',
    'speaking': 'Public Speaking',
    'difficult': 'Difficult Conversations',
    'casual': 'Casual Small Talk'
  };
  return names[category] || category;
}


// ============================================================
// START CUSTOM PRACTICE
// SEARCH: "CUSTOM_SCRIPT_PRACTICE_START"
// ============================================================
function startCustomPractice() {
  const titleInput = document.getElementById("customScriptTitle");
  const textArea = document.getElementById("customScriptText");

  if (!titleInput || !textArea) return;

  const title = titleInput.value.trim() || "My Custom Script";
  const text = textArea.value.trim();
  const wordCount = text.split(/\s+/).filter(w => w.length > 0).length;
  const estimatedDuration = Math.round((wordCount / 150) * 60);

  const customScript = {
    id: "custom",
    title: title,
    duration: estimatedDuration,
    category: "custom",
    wordCount: wordCount,
    text: text
  };

  selectScript(customScript);
}

// ============================================================
// START PRACTICE RECORDING (FIXED)
// SEARCH: "PRACTICE_RECORDING_START_FIX"
// ============================================================
async function startPracticeRecording() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    STATE.mediaRecorder = new MediaRecorder(stream);
    STATE.recordedChunks = [];
    STATE.practiceRecording = true;
    STATE.recordingStartTime = Date.now();

    const startBtn = document.getElementById("startPracticeRecordBtn");
    const stopBtn = document.getElementById("stopPracticeRecordBtn");
    const timer = document.getElementById("recordingTimer");
    const timeDisplay = document.getElementById("recordingTime");

    if (startBtn) startBtn.style.display = "none";
    if (stopBtn) stopBtn.style.display = "inline-block";
    if (timer) timer.style.display = "inline";

    const timerInterval = setInterval(() => {
      if (!STATE.practiceRecording) {
        clearInterval(timerInterval);
        return;
      }

      const elapsed = Math.floor((Date.now() - STATE.recordingStartTime) / 1000);
      const minutes = Math.floor(elapsed / 60);
      const seconds = elapsed % 60;
      if (timeDisplay) {
        timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      }
    }, 1000);

    STATE.mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        STATE.recordedChunks.push(e.data);
      }
    };

    STATE.mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(STATE.recordedChunks, { type: "audio/webm" });
      STATE.practiceAudioBlob = audioBlob;

      await comparePracticeRecording(audioBlob);

      if (startBtn) startBtn.style.display = "inline-block";
      if (stopBtn) stopBtn.style.display = "none";
      if (timer) timer.style.display = "none";
      STATE.practiceRecording = false;
    };

    STATE.mediaRecorder.start();
    showToast("Recording started! Speak the script naturally.", "info");

  } catch (error) {
    console.error("Practice recording error:", error);
    showToast("Could not access microphone. Please check permissions.", "error");
  }
}

// ============================================================
// STOP PRACTICE RECORDING
// SEARCH: "PRACTICE_RECORDING_STOP"
// ============================================================
function stopPracticeRecording() {
  if (STATE.mediaRecorder && STATE.practiceRecording) {
    STATE.mediaRecorder.stop();
    STATE.mediaRecorder.stream.getTracks().forEach(track => track.stop());
    /* SEARCH: "ADD_HISTORY_TRACKING_CALL" */
    // Update practice history
    updatePracticeHistory(STATE.currentPracticeScript.id, comparison.accuracy);

  }
}

// ============================================================
// COMPARE PRACTICE RECORDING (FIXED)
// SEARCH: "PRACTICE_COMPARISON_ANALYSIS_FIX"
// ============================================================
async function comparePracticeRecording(audioBlob) {
  showLoading("Analyzing Your Practice", "Transcribing your speech...");
  updateLoadingProgress(30);

  try {
    const transcriptData = await transcribeAudio(audioBlob);
    let spokenText = transcriptData.raw;

    // Apply name corrections
    spokenText = correctTranscriptNames(spokenText);

    updateLoadingProgress(70);

    const comparison = compareScriptToSpoken(STATE.selectedScript.text, spokenText);
    STATE.comparisonResults = comparison;
    updateLoadingProgress(90);

    hideLoading();

    displayPracticeComparison(comparison, STATE.selectedScript.text, spokenText);

    showToast("Practice analysis complete!", "success");

  } catch (error) {
    console.error("Practice comparison error:", error);
    hideLoading();
    showToast("Failed to analyze practice recording. Please try again.", "error");
  }
}

// ============================================================
// COMPARE SCRIPT TO SPOKEN TEXT
// SEARCH: "SCRIPT_COMPARISON_ALGORITHM"
// ============================================================
function compareScriptToSpoken(scriptText, spokenText) {
  const scriptWords = scriptText.toLowerCase()
    .replace(/\[.*?\]/g, "")
    .split(/\s+/)
    .filter(w => w.length > 0);

  const spokenWords = spokenText.toLowerCase()
    .split(/\s+/)
    .filter(w => w.length > 0);

  let matchedCount = 0;
  let similarCount = 0;
  let differentCount = 0;

  const spokenWithTags = [];

  spokenWords.forEach(spokenWord => {
    const cleanSpoken = spokenWord.replace(/[^a-z]/g, "");

    const exactMatch = scriptWords.some(scriptWord => {
      const cleanScript = scriptWord.replace(/[^a-z]/g, "");
      return cleanScript === cleanSpoken;
    });

    if (exactMatch) {
      matchedCount++;
      spokenWithTags.push({ word: spokenWord, tag: "match" });
    } else {
      const similar = scriptWords.some(scriptWord => {
        const cleanScript = scriptWord.replace(/[^a-z]/g, "");
        return levenshteinDistance(cleanScript, cleanSpoken) <= 2;
      });

      if (similar) {
        similarCount++;
        spokenWithTags.push({ word: spokenWord, tag: "similar" });
      } else {
        differentCount++;
        spokenWithTags.push({ word: spokenWord, tag: "different" });
      }
    }
  });

  const accuracy = Math.round((matchedCount / scriptWords.length) * 100);
  /* SEARCH: "ACCURACY_CAP_CALCULATION" - Ensure max 100 */
  const finalAccuracy = Math.min(100, accuracy);

  let feedback = "";
  if (finalAccuracy >= 90) {
    feedback = "Excellent adherence! You followed the script very closely while sounding natural.";
  } else if (finalAccuracy >= 70) {
    feedback = "Good balance of structure and natural flow. You captured the key points.";
  } else if (finalAccuracy >= 50) {
    feedback = "Consider staying closer to the key points. Practice the script a few more times.";
  } else {
    feedback = "Too much deviation. Try reading the script out loud multiple times before recording.";
  }

  return {
    accuracy: finalAccuracy,
    feedback,
    matchedCount,
    similarCount,
    differentCount,
    spokenWithTags,
    scriptWords
  };
}

// ============================================================
// LEVENSHTEIN DISTANCE (FUZZY MATCHING)
// SEARCH: "LEVENSHTEIN_DISTANCE_ALGORITHM"
// ============================================================
function levenshteinDistance(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  const matrix = [];

  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[len1][len2];
}

// ============================================================
// DISPLAY PRACTICE COMPARISON (FIXED)
// SEARCH: "PRACTICE_RESULTS_DISPLAY_FIX"
// ============================================================
function displayPracticeComparison(comparison, scriptText, spokenText) {
  const recordingInterface = document.getElementById("practiceRecordingInterface");
  const resultsSection = document.getElementById("practiceComparisonResults");

  if (recordingInterface) recordingInterface.style.display = "none";
  if (resultsSection) resultsSection.style.display = "block";

  if (resultsSection) {
    resultsSection.scrollIntoView({ behavior: "smooth" });
  }

  const accuracyPercentage = document.getElementById("accuracyPercentage");
  const accuracyCircle = document.getElementById("accuracyCircle");
  const accuracyFeedback = document.getElementById("accuracyFeedback");

  /* SEARCH: "ACCURACY_CAP_FIX" - Never show >100% */
  const cappedAccuracy = Math.min(100, comparison.accuracy);
  if (accuracyPercentage) accuracyPercentage.textContent = `${cappedAccuracy}%`;

  if (accuracyFeedback) accuracyFeedback.textContent = comparison.feedback;

  const circumference = 502.4;
  const offset = circumference - (cappedAccuracy / 100) * circumference;

  setTimeout(() => {
    if (accuracyCircle) {
      accuracyCircle.style.strokeDashoffset = offset;
    }
  }, 100);

  const matchedEl = document.getElementById("matchedWords");
  const similarEl = document.getElementById("similarWords");
  const addedEl = document.getElementById("addedWords");

  if (matchedEl) matchedEl.textContent = comparison.matchedCount;
  if (similarEl) similarEl.textContent = comparison.similarCount;
  if (addedEl) addedEl.textContent = comparison.differentCount;

  const originalContainer = document.getElementById("originalScriptComparison");
  if (originalContainer) {
    originalContainer.innerHTML = `<p style="line-height: 2; color: var(--text-secondary);">${scriptText}</p>`;
  }

  const spokenContainer = document.getElementById("spokenTextComparison");
  if (spokenContainer) {
    let spokenHTML = "";

    comparison.spokenWithTags.forEach(item => {
      const className = `word-${item.tag}`;
      spokenHTML += `<span class="${className}">${item.word}</span> `;
    });

    spokenContainer.innerHTML = spokenHTML;
  }
}

// ============================================================
// RESET PRACTICE MODE
// SEARCH: "PRACTICE_MODE_RESET"
// ============================================================
function resetPracticeMode() {
  STATE.selectedScript = null;
  STATE.practiceAudioBlob = null;
  STATE.comparisonResults = null;

  const recordingInterface = document.getElementById("practiceRecordingInterface");
  const comparisonResults = document.getElementById("practiceComparisonResults");

  if (recordingInterface) recordingInterface.style.display = "none";
  if (comparisonResults) comparisonResults.style.display = "none";

  if (STATE.practiceMode === "library") {
    showScriptLibrary();
  } else {
    showCustomScript();
  }

  const practiceSection = document.getElementById("practice");
  if (practiceSection) {
    practiceSection.scrollIntoView({ behavior: "smooth" });
  }
}

// ============================================================
// RENDER WORD ANALYSIS VIEW
// SEARCH: "WORD_ANALYSIS_CLICKABLE_RENDERING"
// ============================================================
function renderWordAnalysis() {
  const transcriptContent = document.getElementById("transcriptContent");

  if (!transcriptContent) return;

  if (!STATE.analyzedWords || STATE.analyzedWords.length === 0) {
    transcriptContent.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 2rem;">Word analysis loading...</p>`;
    return;
  }

  let html = "";

  STATE.analyzedWords.forEach((wordData, index) => {
    let className = "word-clickable";

    if (STATE.highlightMode === "confidence") {
      if (wordData.psychology === "high") className += " word-high-confidence";
      else if (wordData.psychology === "low") className += " word-low-confidence";
    } else if (STATE.highlightMode === "filler") {
      if (wordData.isFiller) className += " word-filler";
    } else if (STATE.highlightMode === "authenticity") {
      if (wordData.isPower) className += " word-power";
    }

    html += `<span class="${className}" data-index="${index}" onclick="showWordInsight(${index})">${wordData.word}</span> `;
  });

  transcriptContent.innerHTML = html;
}

// ============================================================
// SHOW WORD INSIGHT
// SEARCH: "WORD_CLICK_INSIGHT_DISPLAY"
// ============================================================
function showWordInsight(index) {
  const wordData = STATE.analyzedWords[index];
  const insightTitle = document.getElementById("insightTitle");
  const insightDescription = document.getElementById("insightDescription");

  if (!insightTitle || !insightDescription) return;

  insightTitle.textContent = `"${wordData.word}"`;

  let description = "";

  if (wordData.isFiller) {
    description = `This is a <strong>filler word</strong>. Filler words like "um", "uh", and "like" indicate processing time or uncertainty. Brain research shows this happens when formulating complex thoughts. <strong>Practice tip:</strong> Try pausing silently for 1-2 seconds instead - it sounds more confident to listeners.`;
  } else if (wordData.isPower) {
    description = `This is a <strong>power word</strong>! Words like "${wordData.word}" demonstrate drive, ambition, and action-oriented thinking. Studies show these words increase perceived leadership by up to 35%. Using more words like this boosts confidence scores significantly.`;
  } else if (wordData.psychology === "high") {
    description = `This word shows <strong>high confidence</strong>. It demonstrates conviction and certainty in your message. Words with this psychological impact make audiences trust you more.`;
  } else if (wordData.psychology === "low") {
    description = `This word suggests <strong>uncertainty</strong> or hedging. While occasional hedging is natural, overuse can reduce perceived expertise. Consider using more decisive language for greater impact.`;
  } else {
    description = `<strong>Emotion:</strong> ${wordData.emotion}<br><strong>Psychology level:</strong> ${wordData.psychology}<br><br>This word contributes to the overall tone of your communication.`;
  }

  insightDescription.innerHTML = description;

  const audioPlayer = document.getElementById("audioPlayer");
  if (audioPlayer && wordData.timestamp) {
    audioPlayer.currentTime = wordData.timestamp;
  }
}

// ============================================================
// RENDER EDIT MODE
// SEARCH: "TRANSCRIPT_EDIT_MODE_RENDERING"
// ============================================================
function renderEditMode() {
  const transcriptContent = document.getElementById("transcriptContent");

  if (!transcriptContent) return;

  const currentTranscript = STATE.rawTranscript || "";

  transcriptContent.innerHTML = `
    <div style="padding: 1rem;">
      <p style="color: var(--text-muted); margin-bottom: 1rem; font-size: 0.9rem;">
        ✏️ Edit the transcript below. Click "Save Changes" to update your analysis with the corrected text.
      </p>
      <textarea 
        id="editTranscriptArea" 
        style="
          width: 100%; 
          min-height: 300px; 
          padding: 1rem; 
          border: 2px solid var(--border-color); 
          border-radius: 12px; 
          background: var(--bg-secondary); 
          color: var(--text-secondary); 
          font-size: 1rem; 
          line-height: 1.8;
          font-family: inherit;
          resize: vertical;
        "
      >${currentTranscript}</textarea>
      <div style="margin-top: 1rem; display: flex; gap: 1rem;">
        <button 
          onclick="saveEditedTranscript()" 
          class="btn-modern btn-modern-success"
        >
          💾 Save Changes
        </button>
        <button 
          onclick="cancelEdit()" 
          class="btn-modern btn-modern-ghost"
        >
          ❌ Cancel
        </button>
      </div>
    </div>
  `;
}

// ============================================================
// SAVE EDITED TRANSCRIPT
// SEARCH: "SAVE_MANUAL_TRANSCRIPT_EDITS"
// ============================================================
function saveEditedTranscript() {
  const editArea = document.getElementById("editTranscriptArea");
  if (!editArea) return;

  const editedText = editArea.value.trim();

  if (!editedText) {
    showToast("Transcript cannot be empty", "error");
    return;
  }

  STATE.rawTranscript = editedText;

  const quickMetrics = calculateQuickMetrics(editedText);
  const quickScores = calculateScores(editedText, quickMetrics, []);

  STATE.metrics = quickMetrics;
  STATE.scores = quickScores;

  displayQuickResults(quickScores, quickMetrics);
  updateAnalysisMetrics(quickMetrics);

  switchTranscriptView("enhanced");

  showToast("Transcript updated! Re-analyzing...", "success");

  runDeepAnalysisInBackground({ raw: editedText, formatted: editedText, words: [] }, quickMetrics);
}

// ============================================================
// CANCEL EDIT
// SEARCH: "CANCEL_TRANSCRIPT_EDIT"
// ============================================================
function cancelEdit() {
  switchTranscriptView("enhanced");
  showToast("Edit cancelled", "info");
}

// ============================================================
// SETUP AUDIO PLAYER
// SEARCH: "AUDIO_PLAYER_INITIALIZATION"
// ============================================================
function setupAudioPlayer(audioBlob, fileName) {
  const audioPlayer = document.getElementById("audioPlayer");
  const audioPlayerControls = document.getElementById("audioPlayerControls");

  if (!audioPlayer) return;

  const audioURL = URL.createObjectURL(audioBlob);
  audioPlayer.src = audioURL;

  if (audioPlayerControls) {
    audioPlayerControls.style.display = "block";
  }

  const videoTitle = document.getElementById("videoTitle");
  if (videoTitle) {
    videoTitle.textContent = fileName;
  }

  audioPlayer.addEventListener("timeupdate", () => {
    syncWordHighlightWithAudio(audioPlayer.currentTime);
  });
}

// ============================================================
// SYNC WORD HIGHLIGHT WITH AUDIO
// SEARCH: "AUDIO_WORD_SYNC_HIGHLIGHTING"
// ============================================================
function syncWordHighlightWithAudio(currentTime) {
  if (STATE.viewMode !== "words" || !STATE.analyzedWords) return;

  const currentWord = STATE.analyzedWords.find((word, index) => {
    const nextWord = STATE.analyzedWords[index + 1];
    return word.timestamp <= currentTime && (!nextWord || nextWord.timestamp > currentTime);
  });

  if (currentWord) {
    document.querySelectorAll(".word-clickable").forEach(el => {
      el.style.background = "";
    });

    const wordElement = document.querySelector(`[data-index="${currentWord.index}"]`);
    if (wordElement) {
      wordElement.style.background = "rgba(118, 75, 162, 0.3)";
    }
  }
}

// ============================================================
// SAVE TO HISTORY
// SEARCH: "ANALYSIS_HISTORY_SAVE"
// ============================================================
function saveToHistory() {
  if (!STATE.scores || !STATE.metrics) return;

  const historyItem = {
    id: Date.now(),
    date: new Date().toISOString(),
    scores: STATE.scores,
    metrics: STATE.metrics,
    transcript: STATE.rawTranscript.substring(0, 200) + "...",
  };

  let history = JSON.parse(localStorage.getItem("cipherHistory") || "[]");

  history.unshift(historyItem);

  history = history.slice(0, 10);

  localStorage.setItem("cipherHistory", JSON.stringify(history));

  STATE.analysisHistory = history;

  renderHistoryDisplay();
}

// ============================================================
// LOAD ANALYSIS HISTORY
// SEARCH: "LOAD_HISTORY_FROM_LOCALSTORAGE"
// ============================================================
function loadAnalysisHistory() {
  const history = JSON.parse(localStorage.getItem("cipherHistory") || "[]");
  STATE.analysisHistory = history;

  renderHistoryDisplay();
}

// ============================================================
// RENDER HISTORY DISPLAY
// SEARCH: "HISTORY_CARDS_RENDERING"
// ============================================================
function renderHistoryDisplay() {
  const historyContainer = document.getElementById("historyContainer");
  if (!historyContainer) return;

  if (STATE.analysisHistory.length === 0) {
    historyContainer.innerHTML = `
      <div class="history-empty">
        <p>Your analysis history will appear here. Complete your first upload to start tracking progress!</p>
      </div>
    `;
    return;
  }

  historyContainer.innerHTML = "";

  STATE.analysisHistory.forEach((item) => {
    const card = document.createElement("div");
    card.className = "history-card";

    const date = new Date(item.date);
    const dateStr = date.toLocaleDateString();
    const timeStr = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    card.innerHTML = `
      <div class="history-card-header">
        <h4>Analysis ${item.id}</h4>
        <span class="history-date">${dateStr} • ${timeStr}</span>
      </div>
      <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 0.5rem;">
        ${item.transcript}
      </p>
      <div class="history-scores">
        <div class="history-score">
          <span class="history-score-value">${item.scores.confidence}</span>
          <span class="history-score-label">Confidence</span>
        </div>
        <div class="history-score">
          <span class="history-score-value">${item.scores.authenticity}</span>
          <span class="history-score-label">Authenticity</span>
        </div>
        <div class="history-score">
          <span class="history-score-value">${item.scores.engagement}</span>
          <span class="history-score-label">Engagement</span>
        </div>
      </div>
    `;

    historyContainer.appendChild(card);
  });
}

// ============================================================
// UPDATE SCORE HISTORY CHART (DARK THEME FIXED)
// SEARCH: "SCORE_HISTORY_CHART_RENDERING_DARK"
// ============================================================
function updateScoreHistoryChart() {
  const canvas = document.getElementById("scoreHistoryChart");
  const section = document.getElementById("scoreHistory");

  if (!canvas || STATE.analysisHistory.length < 2) {
    if (section) section.style.display = "none";
    return;
  }

  section.style.display = "block";

  const ctx = canvas.getContext("2d");
  const width = canvas.offsetWidth;
  const height = 300;
  canvas.width = width;
  canvas.height = height;

  const data = STATE.analysisHistory.slice(0, 5).reverse();

  // DARK BACKGROUND
  ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
  ctx.fillRect(0, 0, width, height);

  const padding = 40;
  const chartWidth = width - 2 * padding;
  const chartHeight = height - 2 * padding;

  // Axes
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, height - padding);
  ctx.lineTo(width - padding, height - padding);
  ctx.stroke();

  // Grid
  ctx.strokeStyle = "rgba(226, 232, 240, 0.3)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padding + (chartHeight / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
  }

  // Y-axis labels
  ctx.fillStyle = "#64748b";
  ctx.font = "12px -apple-system, sans-serif";
  ctx.textAlign = "right";
  for (let i = 0; i <= 4; i++) {
    const value = 100 - (i * 25);
    const y = padding + (chartHeight / 4) * i;
    ctx.fillText(value.toString(), padding - 10, y + 5);
  }

  function drawLine(data, key, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();

    data.forEach((item, index) => {
      const x = padding + (chartWidth / (data.length - 1)) * index;
      const y = height - padding - (item.scores[key] / 100) * chartHeight;

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fill();
    });

    ctx.stroke();
  }

  drawLine(data, "confidence", "#8b5cf6");
  drawLine(data, "authenticity", "#10b981");
  drawLine(data, "engagement", "#3b82f6");

  // Legend
  const legendX = width - padding - 150;
  const legendY = padding + 10;

  ctx.font = "14px -apple-system, sans-serif";
  ctx.textAlign = "left";

  const legends = [
    { label: "Confidence", color: "#8b5cf6" },
    { label: "Authenticity", color: "#10b981" },
    { label: "Engagement", color: "#3b82f6" }
  ];

  legends.forEach((legend, i) => {
    const y = legendY + i * 25;

    ctx.fillStyle = legend.color;
    ctx.fillRect(legendX, y - 10, 15, 15);

    ctx.fillStyle = "#e0e0e0";
    ctx.fillText(legend.label, legendX + 20, y + 2);
  });
}

// ============================================================
// ANIMATE SCORE
// SEARCH: "SCORE_ANIMATION_COUNTER"
// ============================================================
function animateScore(elementId, targetScore) {
  const element = document.getElementById(elementId);
  if (!element) return;

  let currentScore = 0;
  const increment = Math.ceil(targetScore / 30);

  const interval = setInterval(() => {
    currentScore += increment;
    if (currentScore >= targetScore) {
      currentScore = targetScore;
      clearInterval(interval);
    }
    element.textContent = currentScore;
  }, 30);
}

// ============================================================
// LOAD EXAMPLE ANALYSIS
// SEARCH: "EXAMPLE_ANALYSIS_LOADER"
// ============================================================
function loadExampleAnalysis(type) {
  let exampleData;

  if (type === "pitch") {
    exampleData = {
      transcript: "Hi, I'm excited to introduce our revolutionary product that helps businesses achieve unprecedented growth. We've developed a cutting-edge solution that transforms how companies engage with their customers. Our innovative approach delivers measurable results within just 30 days. We're confident this will revolutionize your industry.",
      scores: { confidence: 88, authenticity: 82, engagement: 85 },
      metrics: { wordCount: 52, fillerCount: 0, fillerPercentage: 0, powerWordCount: 8, wordsPerMinute: 145 }
    };
  } else {
    exampleData = {
      transcript: "Um, so I'm, like, really interested in this position because, you know, I think I could, um, maybe contribute to the team. I've done some work in this area and, uh, I guess I have relevant experience.",
      scores: { confidence: 42, authenticity: 58, engagement: 48 },
      metrics: { wordCount: 38, fillerCount: 6, fillerPercentage: 15.8, powerWordCount: 1, wordsPerMinute: 135 }
    };
  }

  STATE.rawTranscript = exampleData.transcript;
  STATE.enhancedTranscript = exampleData.transcript;
  STATE.scores = exampleData.scores;
  STATE.metrics = exampleData.metrics;

  displayQuickResults(exampleData.scores, exampleData.metrics);
  updateAnalysisMetrics(exampleData.metrics);

  const dashboard = document.getElementById("dashboard");
  const transcript = document.getElementById("transcript");
  const transcriptContent = document.getElementById("transcriptContent");

  if (dashboard) dashboard.style.display = "block";
  if (transcript) transcript.style.display = "block";
  if (transcriptContent) {
    transcriptContent.innerHTML = `<p style="line-height: 1.8; color: var(--text-secondary);">${exampleData.transcript}</p>`;
  }

  if (dashboard) {
    /* SEARCH: "NAVIGATE_TO_RESULTS_PAGE" */
    // Navigate to results page with data
    Navigation.goToPage('results', {
      scores: STATE.scores,
      metrics: STATE.metrics,
      transcript: STATE.rawTranscript,
      analyzedWords: STATE.analyzedWords
    });

  }

  showToast(`Example loaded: ${type === "pitch" ? "Product Pitch" : "Job Interview"}`, "success");
}

// ============================================================
// LOADING OVERLAY CONTROLS
// SEARCH: "LOADING_OVERLAY_FUNCTIONS"
// ============================================================
function showLoading(title, description) {
  const overlay = document.getElementById("loadingOverlay");
  const loadingTitle = document.getElementById("loadingTitle");
  const loadingDescription = document.getElementById("loadingDescription");
  const loadingBar = document.getElementById("loadingBar");

  if (overlay) {
    overlay.classList.add("active");
    STATE.currentlyProcessing = true;
  }

  if (loadingTitle) loadingTitle.textContent = title || "Processing...";
  if (loadingDescription) loadingDescription.textContent = description || "Please wait...";
  if (loadingBar) loadingBar.style.width = "0%";
}

function hideLoading() {
  const overlay = document.getElementById("loadingOverlay");
  if (overlay) {
    overlay.classList.remove("active");
    STATE.currentlyProcessing = false;
  }
}

function updateLoadingProgress(percentage) {
  const loadingBar = document.getElementById("loadingBar");
  if (loadingBar) {
    loadingBar.style.width = `${percentage}%`;
  }
  STATE.loadingProgress = percentage;
}

function updateLoadingTitle(title) {
  const loadingTitle = document.getElementById("loadingTitle");
  if (loadingTitle) loadingTitle.textContent = title;
}

function updateLoadingDescription(description) {
  const loadingDescription = document.getElementById("loadingDescription");
  if (loadingDescription) loadingDescription.textContent = description;
}

// ============================================================
// TOAST NOTIFICATION SYSTEM
// SEARCH: "TOAST_NOTIFICATION_DISPLAY"
// ============================================================
function showToast(message, type = "info") {
  let toastContainer = document.querySelector(".toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const icons = {
    success: "✅",
    error: "❌",
    warning: "⚠️",
    info: "ℹ️"
  };

  toast.innerHTML = `
    <div class="toast-icon">${icons[type] || icons.info}</div>
    <div class="toast-message">${message}</div>
    <button class="toast-close" onclick="this.parentElement.remove()">×</button>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    if (toast.parentElement) {
      toast.style.animation = "slideInRight 0.3s ease reverse";
      setTimeout(() => toast.remove(), 300);
    }
  }, 5000);
}

// ============================================================
// NAVIGATION HELPERS
// SEARCH: "NAVIGATION_SCROLL_FUNCTIONS"
// ============================================================
function goHome() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// ============================================================
// UTILITY: DEBOUNCE FUNCTION
// SEARCH: "DEBOUNCE_UTILITY"
// ============================================================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ============================================================
// UTILITY: FORMAT TIME
// SEARCH: "TIME_FORMAT_UTILITY"
// ============================================================
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

// ============================================================
// CONSOLE WELCOME MESSAGE
// SEARCH: "CONSOLE_BRANDING"
// ============================================================
console.log(`
%c
   ██████╗██╗██████╗ ██╗  ██╗███████╗██████╗ 
  ██╔════╝██║██╔══██╗██║  ██║██╔════╝██╔══██╗
  ██║     ██║██████╔╝███████║█████╗  ██████╔╝
  ██║     ██║██╔═══╝ ██╔══██║██╔══╝  ██╔══██╗
  ╚██████╗██║██║     ██║  ██║███████╗██║  ██║
   ╚═════╝╚═╝╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
                                              
  🔮 Decode Your Communication DNA
  Version 2.0 - Enhanced Edition
  
  Built by Asfan | Powered by AI
  
`, "color: #764ba2; font-weight: bold;");

console.log("%cWelcome to Cipher AI! 🚀", "font-size: 16px; color: #10b981; font-weight: bold;");
console.log("%cAll features ready. Upload a file or record live to begin.", "font-size: 12px; color: #64748b;");

// ============================================================
// ERROR BOUNDARY
// SEARCH: "GLOBAL_ERROR_HANDLER"
// ============================================================
window.addEventListener("error", (event) => {
  console.error("Global error:", event.error);
  if (STATE.currentlyProcessing) {
    hideLoading();
    showToast("An unexpected error occurred. Please refresh and try again.", "error");
  }
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
  if (STATE.currentlyProcessing) {
    hideLoading();
    showToast("Processing failed. Please try again.", "error");
  }
});

// ============================================================
// PERFORMANCE MONITORING
// SEARCH: "PERFORMANCE_TRACKING"
// ============================================================
if (window.performance && window.performance.timing) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log(`%c⚡ Page loaded in ${pageLoadTime}ms`, "color: #3b82f6; font-weight: bold;");
    }, 0);
  });
}

// ============================================================
// INITIALIZATION COMPLETE
// SEARCH: "INITIALIZATION_MARKER"
// ============================================================
console.log("%c✅ Cipher AI initialized successfully", "color: #10b981; font-weight: bold;");
console.log("%c📝 Ready for analysis", "color: #64748b;");

// Export functions for testing (optional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculateQuickMetrics,
    calculateScores,
    detectRepetition,
    levenshteinDistance,
    compareScriptToSpoken,
    correctTranscriptNames
  };
}

/* ============================================================
   PRACTICE MODE ENHANCEMENTS - COMPLETE
   SEARCH: "PRACTICE_ENHANCED_COMPLETE"
   All new practice functions with filter fix included
   ============================================================ */

// Filter Scripts Function
function filterScripts() {
  const categoryFilter = document.getElementById('categoryFilter')?.value || 'all';
  const difficultyFilter = document.getElementById('difficultyFilter')?.value || 'all';
  const cards = document.querySelectorAll('.script-card');

  let visibleCount = 0;
  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    const difficulty = card.getAttribute('data-difficulty');

    const categoryMatch = categoryFilter === 'all' || category === categoryFilter;
    const difficultyMatch = difficultyFilter === 'all' || difficulty === difficultyFilter;

    if (categoryMatch && difficultyMatch) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  console.log(`🔍 Filtered: ${visibleCount} scripts visible`);
}

// Clear Filters Function
function clearFilters() {
  const categoryFilter = document.getElementById('categoryFilter');
  const difficultyFilter = document.getElementById('difficultyFilter');

  if (categoryFilter) categoryFilter.value = 'all';
  if (difficultyFilter) difficultyFilter.value = 'all';

  filterScripts();
  console.log('🔄 Filters cleared');
}

// Toggle Favorite Function
function toggleFavorite(scriptId) {
  let favorites = JSON.parse(localStorage.getItem('cipher-favorites')) || [];

  if (favorites.includes(scriptId)) {
    favorites = favorites.filter(id => id !== scriptId);
    console.log(`🤍 Removed from favorites: Script ${scriptId}`);
  } else {
    favorites.push(scriptId);
    console.log(`❤️ Added to favorites: Script ${scriptId}`);
  }

  localStorage.setItem('cipher-favorites', JSON.stringify(favorites));

  // Re-render to update heart icon
  initializePracticeMode();
}

// Show Favorites View
function showFavorites() {
  console.log('⭐ Showing favorites...');

  // Update active button
  document.querySelectorAll('.practice-mode-btn').forEach(btn => btn.classList.remove('active'));
  const favBtn = document.getElementById('btnFavorites');
  if (favBtn) favBtn.classList.add('active');

  // Hide other views
  const scriptLibraryView = document.getElementById('scriptLibraryView');
  const customScriptView = document.getElementById('customScriptView');
  const favoritesView = document.getElementById('favoritesView');
  const practiceFilters = document.getElementById('practiceFilters');
  const recordingInterface = document.getElementById('practiceRecordingInterface');
  const comparisonResults = document.getElementById('practiceComparisonResults');

  if (scriptLibraryView) scriptLibraryView.style.display = 'none';
  if (customScriptView) customScriptView.style.display = 'none';
  if (practiceFilters) practiceFilters.style.display = 'none';
  if (recordingInterface) recordingInterface.style.display = 'none';
  if (comparisonResults) comparisonResults.style.display = 'none';

  // Show favorites view
  if (favoritesView) favoritesView.style.display = 'block';

  // Load favorites
  const favorites = JSON.parse(localStorage.getItem('cipher-favorites')) || [];
  const practiceHistory = JSON.parse(localStorage.getItem('cipher-practice-history')) || {};
  const favoritesGrid = document.getElementById('favoritesGrid');

  if (!favoritesGrid) return;

  if (favorites.length === 0) {
    favoritesGrid.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: var(--text-muted); grid-column: 1 / -1;">
        <h3 style="color: var(--text-secondary); margin-bottom: 1rem;">No Favorites Yet</h3>
        <p style="margin-bottom: 1.5rem;">Click the ❤️ icon on any script to add it to your favorites!</p>
        <button onclick="showScriptLibrary()" class="btn-modern btn-modern-primary">
          Browse Scripts
        </button>
      </div>
    `;
    return;
  }

  // Render favorite scripts
  favoritesGrid.innerHTML = '';

  PRACTICE_SCRIPTS.filter(s => favorites.includes(s.id)).forEach(script => {
    const history = practiceHistory[script.id] || { practiced: 0, bestScore: 0 };

    const difficultyColors = {
      beginner: '#10b981',
      intermediate: '#f59e0b',
      advanced: '#ef4444'
    };

    const difficultyIcons = {
      beginner: '🟢',
      intermediate: '🟡',
      advanced: '🔴'
    };

    const card = document.createElement('div');
    card.className = 'script-card';
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
        <span style="display: inline-block; padding: 0.25rem 0.75rem; background: ${difficultyColors[script.difficulty]}30; border: 1px solid ${difficultyColors[script.difficulty]}60; border-radius: 8px; font-size: 0.75rem; color: ${difficultyColors[script.difficulty]};">
          ${difficultyIcons[script.difficulty]} ${script.difficulty.charAt(0).toUpperCase() + script.difficulty.slice(1)}
        </span>
        <button 
          onclick="toggleFavorite(${script.id})" 
          style="background: none; border: none; font-size: 1.5rem; cursor: pointer; padding: 0; transition: transform 0.2s;"
          onmouseover="this.style.transform='scale(1.2)'"
          onmouseout="this.style.transform='scale(1)'"
        >
          ❤️
        </button>
      </div>
      
      <h3>${script.title}</h3>
      <p>${script.text.substring(0, 120)}...</p>
      
      <div class="script-info">
        <span>⏱️ ${script.duration}s</span>
        <span>📝 ${script.wordCount} words</span>
      </div>

      ${history.practiced > 0 ? `
        <div style="margin-top: 0.75rem; padding: 0.5rem; background: rgba(118, 75, 162, 0.1); border-radius: 8px; font-size: 0.85rem;">
          <span style="color: #a78bfa;">Practiced ${history.practiced}x</span>
          ${history.bestScore > 0 ? ` • <span style="color: #10b981;">Best: ${history.bestScore}%</span>` : ''}
        </div>
      ` : ''}
      
      <button onclick="selectScript(${script.id})" class="btn-modern btn-modern-primary" style="width: 100%; margin-top: 1rem;">
        Start Practice
      </button>
    `;

    favoritesGrid.appendChild(card);
  });
}

// Select Random Script
function selectRandomScript() {
  const randomIndex = Math.floor(Math.random() * PRACTICE_SCRIPTS.length);
  const randomScript = PRACTICE_SCRIPTS[randomIndex];
  console.log(`🎲 Random script selected: ${randomScript.title}`);
  selectScript(randomScript.id);
}

// Update Practice History
function updatePracticeHistory(scriptId, accuracy) {
  let history = JSON.parse(localStorage.getItem('cipher-practice-history')) || {};

  if (!history[scriptId]) {
    history[scriptId] = { practiced: 0, bestScore: 0 };
  }

  history[scriptId].practiced += 1;

  if (accuracy > history[scriptId].bestScore) {
    history[scriptId].bestScore = Math.min(100, accuracy); // Cap at 100
  }

  localStorage.setItem('cipher-practice-history', JSON.stringify(history));

  console.log(`📊 Updated history for script ${scriptId}: ${history[scriptId].practiced} practices, best ${history[scriptId].bestScore}%`);
}

// Get Category Name
function getCategoryName(category) {
  const names = {
    'class': 'Class Presentations',
    'friends': 'Friend Conversations',
    'dating': 'Relationship Talks',
    'social': 'Social Events',
    'study': 'Study Groups',
    'teacher': 'Teacher Interactions',
    'career': 'Job/Internship',
    'speaking': 'Public Speaking',
    'difficult': 'Difficult Conversations',
    'casual': 'Casual Small Talk'
  };
  return names[category] || category;
}

// Show Script Library (FIXED - includes filter bug fix)
function showScriptLibrary() {
  console.log('📚 Showing script library...');

  // Update active button
  document.querySelectorAll('.practice-mode-btn').forEach(btn => btn.classList.remove('active'));
  const libraryBtn = document.getElementById('btnLibraryScripts');
  if (libraryBtn) libraryBtn.classList.add('active');

  // Show library view and filters (FIX: Check if elements exist first)
  const scriptLibraryView = document.getElementById('scriptLibraryView');
  const customScriptView = document.getElementById('customScriptView');
  const favoritesView = document.getElementById('favoritesView');
  const practiceFilters = document.getElementById('practiceFilters');
  const recordingInterface = document.getElementById('practiceRecordingInterface');
  const comparisonResults = document.getElementById('practiceComparisonResults');

  if (scriptLibraryView) scriptLibraryView.style.display = 'block';
  if (customScriptView) customScriptView.style.display = 'none';
  if (favoritesView) favoritesView.style.display = 'none';
  if (practiceFilters) practiceFilters.style.display = 'flex'; // FILTER BUG FIX
  if (recordingInterface) recordingInterface.style.display = 'none';
  if (comparisonResults) comparisonResults.style.display = 'none';

  // Initialize if needed
  const scriptGrid = document.getElementById('scriptGrid');
  if (scriptGrid && scriptGrid.children.length === 0) {
    initializePracticeMode();
  }

  console.log('✅ Script library displayed with filters visible');
}

// Show Custom Script
function showCustomScript() {
  console.log('✍️ Showing custom script...');

  // Update active button
  document.querySelectorAll('.practice-mode-btn').forEach(btn => btn.classList.remove('active'));
  const customBtn = document.getElementById('btnCustomScript');
  if (customBtn) customBtn.classList.add('active');

  // Show custom view
  const scriptLibraryView = document.getElementById('scriptLibraryView');
  const customScriptView = document.getElementById('customScriptView');
  const favoritesView = document.getElementById('favoritesView');
  const practiceFilters = document.getElementById('practiceFilters');
  const recordingInterface = document.getElementById('practiceRecordingInterface');
  const comparisonResults = document.getElementById('practiceComparisonResults');

  if (scriptLibraryView) scriptLibraryView.style.display = 'none';
  if (customScriptView) customScriptView.style.display = 'block';
  if (favoritesView) favoritesView.style.display = 'none';
  if (practiceFilters) practiceFilters.style.display = 'none';
  if (recordingInterface) recordingInterface.style.display = 'none';
  if (comparisonResults) comparisonResults.style.display = 'none';

  // Set up custom script listeners (only once)
  const customTextArea = document.getElementById('customScriptText');
  const customTitle = document.getElementById('customScriptTitle');
  const startBtn = document.getElementById('startCustomPracticeBtn');

  if (customTextArea && !customTextArea.dataset.listenerAttached) {
    customTextArea.addEventListener('input', () => {
      const text = customTextArea.value.trim();
      const words = text.split(/\s+/).filter(w => w.length > 0);
      const wordCount = words.length;
      const estimatedTime = Math.ceil(wordCount / 2.5);

      const wordCountEl = document.getElementById('customWordCount');
      const timeEl = document.getElementById('customEstimatedTime');
      const statusEl = document.getElementById('customScriptStatus');

      if (wordCountEl) wordCountEl.textContent = wordCount;
      if (timeEl) timeEl.textContent = `${Math.floor(estimatedTime / 60)}:${(estimatedTime % 60).toString().padStart(2, '0')}`;

      if (wordCount >= 10 && wordCount <= 500) {
        if (statusEl) {
          statusEl.textContent = '✅ Ready to practice';
          statusEl.style.color = '#10b981';
        }
        if (startBtn) startBtn.disabled = false;
      } else if (wordCount > 500) {
        if (statusEl) {
          statusEl.textContent = '⚠️ Too long (max 500 words)';
          statusEl.style.color = '#f59e0b';
        }
        if (startBtn) startBtn.disabled = true;
      } else {
        if (statusEl) {
          statusEl.textContent = `Need ${10 - wordCount} more words`;
          statusEl.style.color = '#94a3b8';
        }
        if (startBtn) startBtn.disabled = true;
      }
    });

    if (startBtn) {
      startBtn.addEventListener('click', () => {
        const title = customTitle ? customTitle.value.trim() : 'My Custom Script';
        const text = customTextArea.value.trim();
        const words = text.split(/\s+/).filter(w => w.length > 0);

        // Create temporary custom script
        STATE.currentPracticeScript = {
          id: 'custom',
          title: title || 'My Custom Script',
          text: text,
          wordCount: words.length,
          duration: Math.ceil(words.length / 2.5),
          category: 'custom',
          difficulty: 'intermediate'
        };

        // Show script
        selectScript('custom');
      });
    }

    customTextArea.dataset.listenerAttached = 'true';
  }

  console.log('✅ Custom script view displayed');
}

/* ============================================================
   INITIALIZE PRACTICE MODE - ENHANCED COMPLETE
   SEARCH: "INITIALIZE_PRACTICE_ENHANCED"
   Loads all 50 scripts with favorites, difficulty, history
   ============================================================ */

function initializePracticeMode() {
  const scriptGrid = document.getElementById('scriptGrid');
  if (!scriptGrid) {
    console.warn('⚠️ Script grid not found');
    return;
  }

  // Load favorites and history from localStorage
  const favorites = JSON.parse(localStorage.getItem('cipher-favorites')) || [];
  const practiceHistory = JSON.parse(localStorage.getItem('cipher-practice-history')) || {};

  // Clear grid
  scriptGrid.innerHTML = '';

  // Difficulty configurations
  const difficultyColors = {
    beginner: { bg: '#10b98130', border: '#10b98160', text: '#10b981' },
    intermediate: { bg: '#f59e0b30', border: '#f59e0b60', text: '#f59e0b' },
    advanced: { bg: '#ef444430', border: '#ef444460', text: '#ef4444' }
  };

  const difficultyIcons = {
    beginner: '🟢',
    intermediate: '🟡',
    advanced: '🔴'
  };

  // Render all scripts
  PRACTICE_SCRIPTS.forEach(script => {
    const isFavorite = favorites.includes(script.id);
    const history = practiceHistory[script.id] || { practiced: 0, bestScore: 0 };
    const diff = difficultyColors[script.difficulty];

    const card = document.createElement('div');
    card.className = 'script-card hover-lift';
    card.setAttribute('data-category', script.category);
    card.setAttribute('data-difficulty', script.difficulty);

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
        <div>
          <span style="display: inline-block; padding: 0.25rem 0.75rem; background: ${diff.bg}; border: 1px solid ${diff.border}; border-radius: 8px; font-size: 0.75rem; color: ${diff.text}; margin-bottom: 0.5rem;">
            ${difficultyIcons[script.difficulty]} ${script.difficulty.charAt(0).toUpperCase() + script.difficulty.slice(1)}
          </span>
        </div>
        <button 
          onclick="event.stopPropagation(); toggleFavorite(${script.id})" 
          style="background: none; border: none; font-size: 1.5rem; cursor: pointer; padding: 0; transition: transform 0.2s;"
          onmouseover="this.style.transform='scale(1.2)'"
          onmouseout="this.style.transform='scale(1)'"
        >
          ${isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      
      <h3>${script.title}</h3>
      <p>${script.text.substring(0, 120)}...</p>
      
      <div class="script-info">
        <span>⏱️ ${script.duration}s</span>
        <span>📝 ${script.wordCount} words</span>
      </div>

      ${history.practiced > 0 ? `
        <div style="margin-top: 0.75rem; padding: 0.5rem; background: rgba(118, 75, 162, 0.1); border-radius: 8px; font-size: 0.85rem;">
          <span style="color: #a78bfa;">Practiced ${history.practiced}x</span>
          ${history.bestScore > 0 ? ` • <span style="color: #10b981;">Best: ${history.bestScore}%</span>` : ''}
        </div>
      ` : ''}
      
      <button onclick="selectScript(${script.id})" class="btn-modern btn-modern-primary" style="width: 100%; margin-top: 1rem;">
        Start Practice
      </button>
    `;

    scriptGrid.appendChild(card);
  });

  console.log(`✅ Practice mode initialized with ${PRACTICE_SCRIPTS.length} scripts`);
}

/* ============================================================
   AI EXECUTIVE SUMMARY GENERATOR
   SEARCH: "EXECUTIVE_SUMMARY_AI"
   Generates 2-3 sentence overview of analysis using Groq
   ============================================================ */

async function generateExecutiveSummary(transcript, scores, metrics) {
  try {
    console.log('📝 Generating executive summary...');

    const prompt = `Analyze this speech and provide a 2-3 sentence executive summary.

Transcript: "${transcript.substring(0, 500)}..."

Scores:
- Confidence: ${scores.confidence}/100
- Authenticity: ${scores.authenticity}/100  
- Engagement: ${scores.engagement}/100

Metrics:
- Speaking pace: ${metrics.wordsPerMinute} WPM
- Filler words: ${metrics.fillerCount} (${metrics.fillerPercentage}%)
- Power words: ${metrics.powerWords}

Write a concise, actionable summary that:
1. States what the speech is about (1 sentence)
2. Highlights the speaker's greatest strength (1 sentence)
3. Identifies ONE specific area to improve (1 sentence)

Be direct, specific, and encouraging. Write in second person ("You discussed...").`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: 'You are a professional communication coach providing brief executive summaries.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 200
      })
    });

    if (!response.ok) {
      throw new Error(`Groq API error: ${response.status}`);
    }

    const data = await response.json();
    const summary = data.choices[0].message.content.trim();

    console.log('✅ Executive summary generated');
    return summary;

  } catch (error) {
    console.error('❌ Executive summary generation failed:', error);
    return `You delivered a ${transcript.split(' ').length}-word speech with ${scores.confidence}/100 confidence. Your greatest strength is ${scores.authenticity > scores.engagement ? 'authenticity' : 'engagement'} (${Math.max(scores.authenticity, scores.engagement)}/100). Focus on ${metrics.fillerPercentage > 5 ? 'reducing filler words' : 'maintaining speaking pace'} to improve further.`;
  }
}

/* ============================================================
   DISPLAY EXECUTIVE SUMMARY
   SEARCH: "DISPLAY_EXECUTIVE_SUMMARY"
   Shows summary at top of dashboard
   ============================================================ */

function displayExecutiveSummary(summary) {
  // Find dashboard or create summary section
  let summarySection = document.getElementById('executiveSummary');

  if (!summarySection) {
    // Create summary section
    const dashboard = document.querySelector('.dashboard-container');
    if (!dashboard) return;

    summarySection = document.createElement('div');
    summarySection.id = 'executiveSummary';
    summarySection.style.cssText = `
      background: linear-gradient(135deg, rgba(118, 75, 162, 0.1), rgba(102, 126, 234, 0.1));
      border: 1px solid rgba(118, 75, 162, 0.3);
      border-radius: 16px;
      padding: 1.5rem;
      margin-bottom: 2rem;
    `;

    // Insert after h2
    const h2 = dashboard.querySelector('h2');
    if (h2) {
      h2.insertAdjacentElement('afterend', summarySection);
    } else {
      dashboard.insertBefore(summarySection, dashboard.firstChild);
    }
  }

  summarySection.innerHTML = `
    <div style="display: flex; align-items: start; gap: 1rem;">
      <div style="font-size: 2rem;">📋</div>
      <div style="flex: 1;">
        <h3 style="margin: 0 0 0.75rem 0; color: var(--text-primary); font-size: 1.1rem;">Executive Summary</h3>
        <p style="margin: 0; color: var(--text-secondary); line-height: 1.7; font-size: 0.95rem;">
          ${summary}
        </p>
      </div>
    </div>
  `;
}

/* ============================================================
   BENCHMARK COMPARISON
   SEARCH: "BENCHMARK_COMPARISON"
   Compare user scores to different audience types
   ============================================================ */

const BENCHMARK_DATA = {
  students: { confidence: 68, authenticity: 72, engagement: 65 },
  teachers: { confidence: 78, authenticity: 80, engagement: 75 },
  sales: { confidence: 85, authenticity: 75, engagement: 88 },
  executives: { confidence: 88, authenticity: 82, engagement: 85 },
  public_speakers: { confidence: 92, authenticity: 88, engagement: 90 }
};

function displayBenchmarkComparison(userScores) {
  // Find or create benchmark section
  let benchmarkSection = document.getElementById('benchmarkComparison');

  if (!benchmarkSection) {
    const dashboard = document.querySelector('.dashboard-container');
    if (!dashboard) return;

    benchmarkSection = document.createElement('div');
    benchmarkSection.id = 'benchmarkComparison';
    benchmarkSection.className = 'insights-section';
    benchmarkSection.style.marginTop = '2rem';

    dashboard.appendChild(benchmarkSection);
  }

  // Calculate which audience type user is closest to
  let closestMatch = 'students';
  let smallestDiff = Infinity;

  Object.keys(BENCHMARK_DATA).forEach(type => {
    const benchmark = BENCHMARK_DATA[type];
    const diff = Math.abs(userScores.confidence - benchmark.confidence) +
      Math.abs(userScores.authenticity - benchmark.authenticity) +
      Math.abs(userScores.engagement - benchmark.engagement);

    if (diff < smallestDiff) {
      smallestDiff = diff;
      closestMatch = type;
    }
  });

  const typeNames = {
    students: 'Students',
    teachers: 'Teachers',
    sales: 'Sales Professionals',
    executives: 'Executives',
    public_speakers: 'Public Speakers'
  };

  const benchmark = BENCHMARK_DATA[closestMatch];

  benchmarkSection.innerHTML = `
    <h3>📊 How You Compare</h3>
    <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 16px; padding: 1.5rem;">
      <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
        Your communication style is closest to: <strong style="color: var(--text-primary);">${typeNames[closestMatch]}</strong>
      </p>
      
      <div style="display: grid; gap: 1rem;">
        ${['confidence', 'authenticity', 'engagement'].map(metric => {
    const userScore = userScores[metric];
    const benchScore = benchmark[metric];
    const diff = userScore - benchScore;
    const percentage = (userScore / 100) * 100;
    const benchPercentage = (benchScore / 100) * 100;

    return `
            <div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="color: var(--text-secondary); text-transform: capitalize;">${metric}</span>
                <span style="color: ${diff >= 0 ? 'var(--color-success)' : 'var(--color-warning)'};">
                  ${diff >= 0 ? '+' : ''}${diff} vs ${typeNames[closestMatch]}
                </span>
              </div>
              <div style="position: relative; height: 32px; background: rgba(255,255,255,0.05); border-radius: 8px; overflow: hidden;">
                <div style="position: absolute; height: 100%; width: ${benchPercentage}%; background: rgba(255,255,255,0.1); border-right: 2px dashed rgba(255,255,255,0.3);"></div>
                <div style="position: absolute; height: 100%; width: ${percentage}%; background: var(--gradient-purple); transition: width 1s ease;"></div>
                <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: space-between; padding: 0 1rem; font-size: 0.85rem;">
                  <span style="color: white; font-weight: 600;">You: ${userScore}</span>
                  <span style="color: rgba(255,255,255,0.7);">Avg: ${benchScore}</span>
                </div>
              </div>
            </div>
          `;
  }).join('')}
      </div>
    </div>
  `;
}

/* ============================================================
   SCORE IMPROVEMENT SUGGESTIONS
   SEARCH: "IMPROVEMENT_SUGGESTIONS"
   Actionable checklist with estimated score gains
   ============================================================ */

function displayImprovementSuggestions(scores, metrics) {
  let suggestionsSection = document.getElementById('improvementSuggestions');

  if (!suggestionsSection) {
    const dashboard = document.querySelector('.dashboard-container');
    if (!dashboard) return;

    suggestionsSection = document.createElement('div');
    suggestionsSection.id = 'improvementSuggestions';
    suggestionsSection.className = 'insights-section';
    suggestionsSection.style.marginTop = '2rem';

    dashboard.appendChild(suggestionsSection);
  }

  // Generate suggestions based on weakest areas
  const suggestions = [];

  // Confidence suggestions
  if (scores.confidence < 80) {
    const fillerImpact = Math.min(15, Math.floor(metrics.fillerPercentage * 2));
    if (fillerImpact > 0) {
      suggestions.push({
        action: `Eliminate ${Math.ceil(metrics.fillerCount / 2)} filler words`,
        impact: `+${fillerImpact}`,
        metric: 'Confidence',
        difficulty: 'Medium'
      });
    }

    if (metrics.wordsPerMinute < 120 || metrics.wordsPerMinute > 160) {
      suggestions.push({
        action: `Adjust pace to 130-150 WPM (currently ${metrics.wordsPerMinute})`,
        impact: '+8',
        metric: 'Confidence',
        difficulty: 'Easy'
      });
    }
  }

  // Authenticity suggestions
  if (scores.authenticity < 80) {
    if (metrics.powerWords < 3) {
      suggestions.push({
        action: 'Use 5+ power words (believe, achieve, incredible)',
        impact: '+12',
        metric: 'Authenticity',
        difficulty: 'Easy'
      });
    }

    suggestions.push({
      action: 'Share a personal story or example',
      impact: '+10',
      metric: 'Authenticity',
      difficulty: 'Medium'
    });
  }

  // Engagement suggestions
  if (scores.engagement < 80) {
    suggestions.push({
      action: 'Vary your tone and emphasis',
      impact: '+15',
      metric: 'Engagement',
      difficulty: 'Hard'
    });

    suggestions.push({
      action: 'Ask rhetorical questions',
      impact: '+8',
      metric: 'Engagement',
      difficulty: 'Easy'
    });
  }

  // Take top 4 suggestions
  const topSuggestions = suggestions.slice(0, 4);

  if (topSuggestions.length === 0) {
    suggestionsSection.innerHTML = `
      <h3>🎯 Keep It Up!</h3>
      <div class="insight-card">
        <p style="color: var(--text-secondary);">
          Your scores are excellent across all metrics. Continue practicing to maintain this level!
        </p>
      </div>
    `;
    return;
  }

  const difficultyColors = {
    'Easy': 'var(--color-success)',
    'Medium': 'var(--color-warning)',
    'Hard': 'var(--color-error)'
  };

  suggestionsSection.innerHTML = `
    <h3>🎯 Your Improvement Roadmap</h3>
    <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 16px; padding: 1.5rem;">
      <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
        These specific actions could improve your scores:
      </p>
      <div style="display: grid; gap: 1rem;">
        ${topSuggestions.map((suggestion, index) => `
          <div style="display: flex; gap: 1rem; padding: 1rem; background: rgba(255,255,255,0.03); border-radius: 12px; border-left: 3px solid ${difficultyColors[suggestion.difficulty]};">
            <div style="font-size: 1.5rem;">☑️</div>
            <div style="flex: 1;">
              <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.25rem;">
                <strong style="color: var(--text-primary);">${suggestion.action}</strong>
                <span style="background: var(--color-success); color: white; padding: 0.25rem 0.5rem; border-radius: 6px; font-size: 0.85rem; font-weight: 600;">
                  ${suggestion.impact} ${suggestion.metric}
                </span>
              </div>
              <div style="color: var(--text-muted); font-size: 0.85rem;">
                Difficulty: <span style="color: ${difficultyColors[suggestion.difficulty]};">${suggestion.difficulty}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ============================================================
   STREAK TRACKING SYSTEM
   SEARCH: "STREAK_TRACKING"
   Track consecutive days of practice
   ============================================================ */

function updateStreak() {
  const streakData = JSON.parse(localStorage.getItem('cipher-streak')) || {
    current: 0,
    longest: 0,
    lastPracticeDate: null
  };

  const today = new Date().toDateString();
  const lastDate = streakData.lastPracticeDate;

  if (lastDate === today) {
    // Already practiced today
    return streakData;
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toDateString();

  if (lastDate === yesterdayStr) {
    // Continuing streak
    streakData.current += 1;
  } else if (lastDate === null) {
    // First ever practice
    streakData.current = 1;
  } else {
    // Streak broken, start over
    streakData.current = 1;
  }

  // Update longest streak
  if (streakData.current > streakData.longest) {
    streakData.longest = streakData.current;
  }

  streakData.lastPracticeDate = today;

  localStorage.setItem('cipher-streak', JSON.stringify(streakData));

  console.log(`🔥 Streak updated: ${streakData.current} days (longest: ${streakData.longest})`);

  return streakData;
}

function displayStreakCounter() {
  const streakData = JSON.parse(localStorage.getItem('cipher-streak')) || {
    current: 0,
    longest: 0
  };

  let streakSection = document.getElementById('streakCounter');

  if (!streakSection) {
    const dashboard = document.querySelector('.dashboard-container');
    if (!dashboard) return;

    streakSection = document.createElement('div');
    streakSection.id = 'streakCounter';
    streakSection.style.cssText = `
      background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(249, 115, 22, 0.1));
      border: 1px solid rgba(239, 68, 68, 0.3);
      border-radius: 16px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      text-align: center;
    `;

    // Insert at top
    const firstChild = dashboard.firstElementChild;
    if (firstChild) {
      dashboard.insertBefore(streakSection, firstChild);
    }
  }

  streakSection.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; gap: 2rem; flex-wrap: wrap;">
      <div>
        <div style="font-size: 3rem; margin-bottom: 0.25rem;">🔥</div>
        <div style="font-size: 2rem; font-weight: 800; color: #ef4444; margin-bottom: 0.25rem;">
          ${streakData.current}
        </div>
        <div style="color: var(--text-muted); font-size: 0.9rem;">Day Streak</div>
      </div>
      ${streakData.longest > 0 ? `
        <div style="border-left: 1px solid rgba(255,255,255,0.1); padding-left: 2rem;">
          <div style="font-size: 2rem; margin-bottom: 0.25rem;">🏆</div>
          <div style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">
            ${streakData.longest}
          </div>
          <div style="color: var(--text-muted); font-size: 0.9rem;">Longest Streak</div>
        </div>
      ` : ''}
    </div>
    ${streakData.current >= 7 ? `
      <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(16, 185, 129, 0.1); border-radius: 8px;">
        <span style="color: var(--color-success); font-weight: 600;">🎉 Amazing! You've maintained a ${streakData.current}-day streak!</span>
      </div>
    ` : ''}
  `;
}

/* ============================================================
   GOAL SETTING SYSTEM
   SEARCH: "GOAL_SYSTEM"
   Set and track score goals
   ============================================================ */

function displayGoalSetting() {
  let goalSection = document.getElementById('goalSection');

  if (!goalSection) {
    const dashboard = document.querySelector('.dashboard-container');
    if (!dashboard) return;

    goalSection = document.createElement('div');
    goalSection.id = 'goalSection';
    goalSection.className = 'insights-section';
    goalSection.style.marginTop = '2rem';

    dashboard.appendChild(goalSection);
  }

  const goals = JSON.parse(localStorage.getItem('cipher-goals')) || [];
  const currentScores = STATE.scores || { confidence: 0, authenticity: 0, engagement: 0 };

  goalSection.innerHTML = `
    <h3>🎯 Your Goals</h3>
    <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 16px; padding: 1.5rem;">
      ${goals.length > 0 ? `
        <div style="display: grid; gap: 1rem; margin-bottom: 1.5rem;">
          ${goals.map((goal, index) => {
    const progress = Math.min(100, Math.round((currentScores[goal.metric] / goal.target) * 100));
    const achieved = currentScores[goal.metric] >= goal.target;

    return `
              <div style="padding: 1rem; background: rgba(255,255,255,0.03); border-radius: 12px; ${achieved ? 'border: 2px solid var(--color-success);' : ''}">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                  <div>
                    <strong style="color: var(--text-primary); text-transform: capitalize;">${goal.metric}</strong>
                    <span style="color: var(--text-muted); margin-left: 0.5rem;">→ ${goal.target}</span>
                  </div>
                  <div style="display: flex; gap: 0.5rem; align-items: center;">
                    ${achieved ? '<span style="color: var(--color-success); font-weight: 600;">✅ Achieved!</span>' : ''}
                    <button onclick="removeGoal(${index})" style="background: none; border: none; color: var(--text-dim); cursor: pointer; font-size: 1.2rem;">✕</button>
                  </div>
                </div>
                <div style="position: relative; height: 24px; background: rgba(255,255,255,0.05); border-radius: 12px; overflow: hidden;">
                  <div style="height: 100%; width: ${progress}%; background: ${achieved ? 'var(--gradient-green)' : 'var(--gradient-purple)'}; transition: width 1s ease; border-radius: 12px;"></div>
                  <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 600; color: white;">
                    ${currentScores[goal.metric]} / ${goal.target}
                  </div>
                </div>
              </div>
            `;
  }).join('')}
        </div>
      ` : `
        <p style="color: var(--text-muted); text-align: center; padding: 2rem 0;">
          No goals set yet. Set a goal to track your progress!
        </p>
      `}
      
      <button onclick="showGoalModal()" class="btn-modern btn-modern-primary" style="width: 100%;">
        ➕ Set New Goal
      </button>
    </div>
  `;
}

function showGoalModal() {
  const modal = document.createElement('div');
  modal.id = 'goalModal';
  modal.style.cssText = `
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    backdrop-filter: blur(5px);
  `;

  const currentScores = STATE.scores || { confidence: 0, authenticity: 0, engagement: 0 };

  modal.innerHTML = `
    <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 20px; padding: 2rem; max-width: 500px; width: 90%;">
      <h3 style="margin-top: 0; color: var(--text-primary);">Set a New Goal</h3>
      
      <label style="display: block; margin: 1.5rem 0 0.5rem; color: var(--text-secondary); font-weight: 500;">
        Which metric?
      </label>
      <select id="goalMetric" class="input-modern" style="width: 100%;">
        <option value="confidence">Confidence (currently ${currentScores.confidence})</option>
        <option value="authenticity">Authenticity (currently ${currentScores.authenticity})</option>
        <option value="engagement">Engagement (currently ${currentScores.engagement})</option>
      </select>

      <label style="display: block; margin: 1.5rem 0 0.5rem; color: var(--text-secondary); font-weight: 500;">
        Target score (1-100)
      </label>
      <input 
        type="number" 
        id="goalTarget" 
        class="input-modern" 
        style="width: 100%;"
        min="1" 
        max="100" 
        value="${Math.min(100, Math.max(...Object.values(currentScores)) + 10)}"
      >

      <div style="display: flex; gap: 1rem; margin-top: 2rem;">
        <button onclick="saveGoal()" class="btn-modern btn-modern-primary" style="flex: 1;">
          Save Goal
        </button>
        <button onclick="closeGoalModal()" class="btn-modern btn-modern-ghost" style="flex: 1;">
          Cancel
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

function closeGoalModal() {
  const modal = document.getElementById('goalModal');
  if (modal) modal.remove();
}

function saveGoal() {
  const metric = document.getElementById('goalMetric').value;
  const target = parseInt(document.getElementById('goalTarget').value);

  if (target < 1 || target > 100) {
    alert('Target must be between 1 and 100');
    return;
  }

  const goals = JSON.parse(localStorage.getItem('cipher-goals')) || [];

  // Check if goal already exists for this metric
  const existingIndex = goals.findIndex(g => g.metric === metric);
  if (existingIndex >= 0) {
    goals[existingIndex].target = target;
  } else {
    goals.push({ metric, target, createdAt: new Date().toISOString() });
  }

  localStorage.setItem('cipher-goals', JSON.stringify(goals));

  closeGoalModal();
  displayGoalSetting();

  console.log(`🎯 Goal set: ${metric} → ${target}`);
}

function removeGoal(index) {
  const goals = JSON.parse(localStorage.getItem('cipher-goals')) || [];
  goals.splice(index, 1);
  localStorage.setItem('cipher-goals', JSON.stringify(goals));
  displayGoalSetting();
}

/* ============================================================
   ENHANCED CHART RENDERING
   SEARCH: "ENHANCED_CHARTS"
   Higher quality charts with better styling
   ============================================================ */

function updateScoreHistoryChart() {
  const canvas = document.getElementById('scoreHistoryChart');
  if (!canvas) return;

  const history = JSON.parse(localStorage.getItem('cipher-analysis-history')) || [];
  if (history.length === 0) {
    document.getElementById('scoreHistory').style.display = 'none';
    return;
  }

  /* SEARCH: "SAVE_ANALYSIS_HISTORY" */
  function saveAnalysisToHistory(scores, metrics, transcript) {
    let history = JSON.parse(localStorage.getItem('cipher-analysis-history')) || [];

    const analysis = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleString(),
      scores: scores,
      metrics: metrics,
      transcript: transcript.substring(0, 200) + '...',
      fullTranscript: transcript
    };

    history.unshift(analysis); // Add to beginning

    // Keep only last 10
    if (history.length > 10) {
      history = history.slice(0, 10);
    }

    localStorage.setItem('cipher-analysis-history', JSON.stringify(history));

    console.log('💾 Analysis saved to history');

    // Update history display
    loadAnalysisHistory();

    // Update chart
    updateScoreHistoryChart();
  }


  document.getElementById('scoreHistory').style.display = 'block';

  // Set high DPI for sharper rendering
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  canvas.style.width = rect.width + 'px';
  canvas.style.height = rect.height + 'px';

  // Prepare data
  const labels = history.map((_, i) => `#${i + 1}`);
  const confidenceData = history.map(h => h.scores.confidence);
  const authenticityData = history.map(h => h.scores.authenticity);
  const engagementData = history.map(h => h.scores.engagement);

  // Destroy existing chart if any
  if (window.scoreHistoryChartInstance) {
    window.scoreHistoryChartInstance.destroy();
  }

  // Create new chart
  window.scoreHistoryChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Confidence',
          data: confidenceData,
          borderColor: '#764ba2',
          backgroundColor: 'rgba(118, 75, 162, 0.1)',
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7,
          pointBackgroundColor: '#764ba2',
          fill: true
        },
        {
          label: 'Authenticity',
          data: authenticityData,
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7,
          pointBackgroundColor: '#10b981',
          fill: true
        },
        {
          label: 'Engagement',
          data: engagementData,
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 5,
          pointHoverRadius: 7,
          pointBackgroundColor: '#3b82f6',
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: 'index'
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: '#e2e8f0',
            padding: 15,
            font: {
              size: 13,
              family: 'Geist'
            },
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        tooltip: {
          backgroundColor: 'rgba(15, 15, 15, 0.95)',
          titleColor: '#f8fafc',
          bodyColor: '#e2e8f0',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderWidth: 1,
          padding: 12,
          displayColors: true,
          callbacks: {
            label: function (context) {
              return context.dataset.label + ': ' + context.parsed.y + '/100';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: {
            color: 'rgba(255, 255, 255, 0.05)',
            drawBorder: false
          },
          ticks: {
            color: '#94a3b8',
            font: {
              size: 12,
              family: 'Geist'
            },
            callback: function (value) {
              return value;
            }
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: '#94a3b8',
            font: {
              size: 12,
              family: 'Geist'
            }
          }
        }
      }
    }
  });

  console.log('📈 Score history chart updated');
}




/* ============================================================
   SEARCH: ADDED_FUNCTIONS_CHUNK_1
   CRITICAL MISSING FUNCTIONS - ALL NEW ADDITIONS
   These functions are called but were never defined
   ============================================================ */

// ============================================================
// DISPLAY ENHANCED TRANSCRIPT (NEW)
// SEARCH: "DISPLAY_ENHANCED_TRANSCRIPT_NEW"
// ============================================================
function displayEnhancedTranscript(transcript, analyzedWords) {
  const transcriptContent = document.getElementById('transcriptContent');
  if (!transcriptContent) return;

  // Split transcript into words
  const words = transcript.split(/\s+/);

  // Filler words to highlight in red
  const fillerWords = ['um', 'uh', 'like', 'you know', 'actually', 'basically', 'literally', 'so'];

  // Power words to highlight in green
  const powerWords = ['achieve', 'create', 'build', 'develop', 'improve', 'succeed', 'innovate', 
                     'transform', 'deliver', 'lead', 'drive', 'impact', 'believe', 'confident'];

  let htmlContent = '<div class="enhanced-transcript-content">';

  words.forEach((word, index) => {
    const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
    let wordClass = '';

    if (fillerWords.includes(cleanWord)) {
      wordClass = 'filler-word';
    } else if (powerWords.includes(cleanWord)) {
      wordClass = 'power-word';
    }

    if (wordClass) {
      htmlContent += `<span class="${wordClass}" title="${wordClass === 'filler-word' ? 'Filler word' : 'Power word'}">${word}</span> `;
    } else {
      htmlContent += `${word} `;
    }
  });

  htmlContent += '</div>';

  // Add legend
  htmlContent += `
    <div class="transcript-legend" style="margin-top: 1rem; padding: 1rem; background: rgba(255,255,255,0.03); border-radius: 8px;">
      <div style="display: flex; gap: 2rem; font-size: 0.9rem;">
        <div><span class="filler-word" style="padding: 2px 6px;">Filler words</span> - Try to reduce these</div>
        <div><span class="power-word" style="padding: 2px 6px;">Power words</span> - Great choices!</div>
      </div>
    </div>
  `;

  transcriptContent.innerHTML = htmlContent;
  console.log('✅ Enhanced transcript displayed with highlighting');
}


// ============================================================
// SETUP AUDIO PLAYER (NEW)
// SEARCH: "SETUP_AUDIO_PLAYER_NEW"
// ============================================================
function setupAudioPlayer(audioBlob) {
  const audioPlayerControls = document.getElementById('audioPlayerControls');
  const audioPlayer = document.getElementById('audioPlayer');

  if (!audioPlayerControls || !audioPlayer) {
    console.warn('⚠️ Audio player elements not found');
    return;
  }

  // Create blob URL
  const audioURL = URL.createObjectURL(audioBlob);
  audioPlayer.src = audioURL;

  // Show the player controls
  audioPlayerControls.style.display = 'block';

  // Add event listener for when audio metadata is loaded
  audioPlayer.addEventListener('loadedmetadata', () => {
    const duration = audioPlayer.duration;
    STATE.audioDuration = duration;
    console.log(`🎵 Audio player setup complete. Duration: ${duration.toFixed(2)}s`);
  });

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    URL.revokeObjectURL(audioURL);
  });

  console.log('✅ Audio player initialized');
}


// ============================================================
// DISPLAY EXECUTIVE SUMMARY (NEW)
// SEARCH: "DISPLAY_EXECUTIVE_SUMMARY_NEW"
// ============================================================
function displayExecutiveSummary(summary) {
  const executiveSummary = document.getElementById('executiveSummary');
  const summaryText = document.getElementById('summaryText');

  if (!executiveSummary || !summaryText) {
    console.warn('⚠️ Executive summary elements not found');
    return;
  }

  summaryText.textContent = summary;
  executiveSummary.style.display = 'block';

  console.log('✅ Executive summary displayed');
}


// ============================================================
// GENERATE EXECUTIVE SUMMARY (NEW)
// SEARCH: "GENERATE_EXECUTIVE_SUMMARY_NEW"
// ============================================================
async function generateExecutiveSummary(transcript, scores, metrics) {
  try {
    const prompt = `Summarize this speech analysis in 2-3 sentences:

Transcript: "${transcript.substring(0, 300)}..."

Scores:
- Confidence: ${scores.confidence}/100
- Authenticity: ${scores.authenticity}/100  
- Engagement: ${scores.engagement}/100

Metrics:
- ${metrics.wordCount} words at ${metrics.wordsPerMinute} WPM
- ${metrics.fillerCount} filler words (${metrics.fillerPercentage}%)
- ${metrics.powerWords} power words

Write a brief, encouraging summary highlighting their strengths and one area to improve.`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CONFIG.groqApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: 'You are a communication coach. Be encouraging but honest.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 150
      })
    });

    if (!response.ok) throw new Error('Groq API error');

    const data = await response.json();
    return data.choices[0].message.content.trim();

  } catch (error) {
    console.error('Executive summary generation error:', error);
    // Fallback summary
    return `Your communication style shows ${scores.confidence >= 70 ? 'strong' : 'developing'} confidence with a ${scores.authenticity}/100 authenticity score. You spoke ${metrics.wordCount} words at ${metrics.wordsPerMinute} WPM. ${metrics.fillerPercentage > 5 ? 'Focus on reducing filler words to improve clarity.' : 'Your speech clarity is excellent!'}`;
  }
}


// ============================================================
// DISPLAY BENCHMARK COMPARISON (NEW)
// SEARCH: "DISPLAY_BENCHMARK_COMPARISON_NEW"
// ============================================================
function displayBenchmarkComparison(scores) {
  const benchmarkComparison = document.getElementById('benchmarkComparison');
  const benchmarkContent = document.getElementById('benchmarkContent');

  if (!benchmarkComparison || !benchmarkContent) {
    console.warn('⚠️ Benchmark comparison elements not found');
    return;
  }

  // Average scores for comparison (industry benchmarks)
  const benchmarks = {
    confidence: 65,
    authenticity: 68,
    engagement: 62
  };

  let html = '';

  Object.keys(scores).forEach(key => {
    const userScore = scores[key];
    const avgScore = benchmarks[key];
    const difference = userScore - avgScore;
    const percentage = (userScore / 100) * 100;
    const avgPercentage = (avgScore / 100) * 100;

    const label = key.charAt(0).toUpperCase() + key.slice(1);
    const comparisonText = difference > 0 
      ? `<span style="color: #10b981;">+${difference} above average</span>`
      : difference < 0
      ? `<span style="color: #f59e0b;">${difference} below average</span>`
      : `<span style="color: #64748b;">At average</span>`;

    html += `
      <div class="benchmark-item">
        <div class="benchmark-header">
          <span class="benchmark-label">${label}</span>
          <div class="benchmark-scores">
            <span class="benchmark-your-score">You: ${userScore}</span>
            <span class="benchmark-avg-score">Avg: ${avgScore}</span>
          </div>
        </div>
        <div class="benchmark-bar">
          <div class="benchmark-bar-fill" style="width: ${percentage}%"></div>
          <div class="benchmark-bar-average" style="left: ${avgPercentage}%"></div>
        </div>
        <div style="margin-top: 0.5rem; font-size: 0.875rem;">
          ${comparisonText}
        </div>
      </div>
    `;
  });

  benchmarkContent.innerHTML = html;
  benchmarkComparison.style.display = 'block';

  console.log('✅ Benchmark comparison displayed');
}


// ============================================================
// DISPLAY IMPROVEMENT SUGGESTIONS (NEW)
// SEARCH: "DISPLAY_IMPROVEMENT_SUGGESTIONS_NEW"
// ============================================================
function displayImprovementSuggestions(scores, metrics) {
  const improvementSuggestions = document.getElementById('improvementSuggestions');
  const suggestionsContent = document.getElementById('suggestionsContent');

  if (!improvementSuggestions || !suggestionsContent) {
    console.warn('⚠️ Improvement suggestions elements not found');
    return;
  }

  const suggestions = [];

  // Filler words suggestion
  if (metrics.fillerPercentage > 3) {
    suggestions.push({
      icon: '🎯',
      title: 'Reduce Filler Words',
      description: `You used ${metrics.fillerCount} filler words (${metrics.fillerPercentage}%). Try pausing silently for 1-2 seconds instead of saying "um" or "uh". Record yourself and become aware of when you use them.`
    });
  }

  // Speaking pace suggestion
  if (metrics.wordsPerMinute < 120) {
    suggestions.push({
      icon: '⚡',
      title: 'Increase Your Pace',
      description: `Your speaking pace is ${metrics.wordsPerMinute} WPM. Try to speed up to 130-150 WPM for better engagement. Practice reading articles aloud and time yourself.`
    });
  } else if (metrics.wordsPerMinute > 170) {
    suggestions.push({
      icon: '🐢',
      title: 'Slow Down Slightly',
      description: `You're speaking at ${metrics.wordsPerMinute} WPM, which might be too fast. Aim for 130-160 WPM to ensure clarity. Take deliberate pauses between key points.`
    });
  }

  // Power words suggestion
  if (metrics.powerWords < 3) {
    suggestions.push({
      icon: '💪',
      title: 'Use More Power Words',
      description: `You only used ${metrics.powerWords} power words. Incorporate action-oriented language like "achieve", "create", "transform", "innovate" to boost perceived confidence and engagement.`
    });
  }

  // Confidence boost
  if (scores.confidence < 70) {
    suggestions.push({
      icon: '🎤',
      title: 'Build Speaking Confidence',
      description: `Your confidence score is ${scores.confidence}/100. Practice your speeches in front of a mirror or record yourself. Focus on maintaining steady eye contact and using assertive body language.`
    });
  }

  // If all scores are great
  if (suggestions.length === 0) {
    suggestions.push({
      icon: '🌟',
      title: 'Excellent Performance!',
      description: `Your communication skills are strong across all metrics. Keep practicing to maintain this level. Consider challenging yourself with more complex topics or larger audiences.`
    });
  }

  let html = '';
  suggestions.forEach(suggestion => {
    html += `
      <div class="suggestion-card">
        <div class="suggestion-icon">${suggestion.icon}</div>
        <div class="suggestion-content">
          <h4 class="suggestion-title">${suggestion.title}</h4>
          <p class="suggestion-description">${suggestion.description}</p>
        </div>
      </div>
    `;
  });

  suggestionsContent.innerHTML = html;
  improvementSuggestions.style.display = 'block';

  console.log('✅ Improvement suggestions displayed');
}


// ============================================================
// GENERATE ANALYSIS TITLE WITH GROQ (NEW)
// SEARCH: "GENERATE_ANALYSIS_TITLE_GROQ"
// ============================================================
async function generateAnalysisTitle(transcript) {
  try {
    const prompt = `Create a short, descriptive title (max 6 words) for this speech transcript:

"${transcript.substring(0, 200)}..."

The title should capture the main topic or theme. Be specific and concise.
Return ONLY the title, nothing else.`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CONFIG.groqApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: 'You create concise, descriptive titles. Return only the title, maximum 6 words.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 20
      })
    });

    if (!response.ok) throw new Error('Groq API error');

    const data = await response.json();
    let title = data.choices[0].message.content.trim();

    // Remove quotes if present
    title = title.replace(/^["']|["']$/g, '');

    // Limit to 6 words
    const words = title.split(' ');
    if (words.length > 6) {
      title = words.slice(0, 6).join(' ') + '...';
    }

    return title;

  } catch (error) {
    console.error('Title generation error:', error);
    // Fallback to date-based title
    return `Analysis ${new Date().toLocaleDateString()}`;
  }
}

console.log('✅ All 6 critical functions added successfully');

/* ============================================================
   CIPHER - CRITICAL FIXES AND NEW FUNCTIONS
   ADD THIS TO THE END OF YOUR script.js FILE
   ============================================================ */

// ============================================================
// MISSING FUNCTION 1: displayEnhancedTranscript
// ============================================================
function displayEnhancedTranscript(transcript, analyzedWords) {
  const transcriptContent = document.getElementById('transcriptContent');
  const rawTranscriptContent = document.getElementById('rawTranscriptContent');

  if (!transcriptContent) {
    console.warn('transcriptContent element not found');
    return;
  }

  const words = transcript.split(/\s+/);
  const fillerWords = ['um', 'uh', 'like', 'you know', 'actually', 'basically', 'literally', 'so'];
  const powerWords = ['achieve', 'create', 'build', 'develop', 'improve', 'succeed', 'innovate', 
                     'transform', 'deliver', 'lead', 'drive', 'impact', 'believe', 'confident'];

  let enhancedHTML = '<div class="enhanced-transcript-content">';

  words.forEach(word => {
    const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
    let wordClass = '';

    if (fillerWords.includes(cleanWord)) {
      wordClass = 'filler-word';
    } else if (powerWords.includes(cleanWord)) {
      wordClass = 'power-word';
    }

    if (wordClass) {
      enhancedHTML += `<span class="${wordClass}">${word}</span> `;
    } else {
      enhancedHTML += `${word} `;
    }
  });

  enhancedHTML += '</div>';
  enhancedHTML += `
    <div class="transcript-legend" style="margin-top: 1rem; padding: 1rem; background: rgba(255,255,255,0.03); border-radius: 8px;">
      <div style="display: flex; gap: 2rem; font-size: 0.9rem; flex-wrap: wrap;">
        <div><span class="filler-word" style="padding: 2px 6px;">Filler words</span> - Try to reduce</div>
        <div><span class="power-word" style="padding: 2px 6px;">Power words</span> - Great choices!</div>
      </div>
    </div>
  `;

  transcriptContent.innerHTML = enhancedHTML;

  if (rawTranscriptContent) {
    rawTranscriptContent.innerHTML = `<p style="line-height: 1.8;">${transcript}</p>`;
  }

  console.log('✅ Enhanced transcript displayed');
}

// ============================================================
// MISSING FUNCTION 2: setupAudioPlayer
// ============================================================
function setupAudioPlayer(audioBlob) {
  const audioPlayerControls = document.getElementById('audioPlayerControls');
  const audioPlayer = document.getElementById('audioPlayer');

  if (!audioPlayerControls || !audioPlayer) {
    console.warn('Audio player elements not found');
    return;
  }

  const audioURL = URL.createObjectURL(audioBlob);
  audioPlayer.src = audioURL;
  audioPlayerControls.style.display = 'block';

  audioPlayer.addEventListener('loadedmetadata', () => {
    STATE.audioDuration = audioPlayer.duration;
    console.log(`Audio duration: ${audioPlayer.duration}s`);
  });

  console.log('✅ Audio player setup complete');
}

// ============================================================
// MISSING FUNCTION 3: generateExecutiveSummary
// ============================================================
async function generateExecutiveSummary(transcript, scores, metrics) {
  try {
    const prompt = `Summarize this speech analysis in 2-3 sentences:

Transcript: "${transcript.substring(0, 300)}..."

Scores:
- Confidence: ${scores.confidence}/100
- Authenticity: ${scores.authenticity}/100  
- Engagement: ${scores.engagement}/100

Metrics:
- ${metrics.wordCount} words at ${metrics.wordsPerMinute} WPM
- ${metrics.fillerCount} filler words
- ${metrics.powerWords} power words

Write a brief, encouraging summary highlighting strengths and one improvement area.`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CONFIG.groqApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: 'You are a communication coach. Be encouraging.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 150
      })
    });

    if (!response.ok) throw new Error('Groq API error');

    const data = await response.json();
    return data.choices[0].message.content.trim();

  } catch (error) {
    console.error('Executive summary error:', error);
    return `Your communication shows ${scores.confidence >= 70 ? 'strong' : 'developing'} confidence with ${scores.authenticity}/100 authenticity. You spoke ${metrics.wordCount} words at ${metrics.wordsPerMinute} WPM. ${metrics.fillerPercentage > 5 ? 'Focus on reducing filler words.' : 'Excellent clarity!'}`;
  }
}

// ============================================================
// MISSING FUNCTION 4: displayExecutiveSummary
// ============================================================
function displayExecutiveSummary(summary) {
  const executiveSummary = document.getElementById('executiveSummary');
  const summaryText = document.getElementById('summaryText');

  if (!executiveSummary || !summaryText) {
    console.warn('Executive summary elements not found');
    return;
  }

  summaryText.textContent = summary;
  executiveSummary.style.display = 'block';
  console.log('✅ Executive summary displayed');
}

// ============================================================
// MISSING FUNCTION 5: displayBenchmarkComparison
// ============================================================
function displayBenchmarkComparison(scores) {
  const benchmarkComparison = document.getElementById('benchmarkComparison');
  const benchmarkContent = document.getElementById('benchmarkContent');

  if (!benchmarkComparison || !benchmarkContent) {
    console.warn('Benchmark elements not found');
    return;
  }

  const benchmarks = { confidence: 65, authenticity: 68, engagement: 62 };
  let html = '';

  Object.keys(scores).forEach(key => {
    const userScore = scores[key];
    const avgScore = benchmarks[key];
    const difference = userScore - avgScore;
    const percentage = (userScore / 100) * 100;
    const avgPercentage = (avgScore / 100) * 100;

    const label = key.charAt(0).toUpperCase() + key.slice(1);
    const comparisonText = difference > 0 
      ? `<span style="color: #10b981;">+${difference} above average</span>`
      : difference < 0
      ? `<span style="color: #f59e0b;">${difference} below average</span>`
      : `<span style="color: #64748b;">At average</span>`;

    html += `
      <div class="benchmark-item">
        <div class="benchmark-header">
          <span class="benchmark-label">${label}</span>
          <div class="benchmark-scores">
            <span class="benchmark-your-score">You: ${userScore}</span>
            <span class="benchmark-avg-score">Avg: ${avgScore}</span>
          </div>
        </div>
        <div class="benchmark-bar">
          <div class="benchmark-bar-fill" style="width: ${percentage}%"></div>
        </div>
        <div style="margin-top: 0.5rem; font-size: 0.875rem;">
          ${comparisonText}
        </div>
      </div>
    `;
  });

  benchmarkContent.innerHTML = html;
  benchmarkComparison.style.display = 'block';
  console.log('✅ Benchmark comparison displayed');
}

// ============================================================
// MISSING FUNCTION 6: displayImprovementSuggestions
// ============================================================
function displayImprovementSuggestions(scores, metrics) {
  const improvementSuggestions = document.getElementById('improvementSuggestions');
  const suggestionsContent = document.getElementById('suggestionsContent');

  if (!improvementSuggestions || !suggestionsContent) {
    console.warn('Improvement suggestions elements not found');
    return;
  }

  const suggestions = [];

  if (metrics.fillerPercentage > 3) {
    suggestions.push({
      icon: '🎯',
      title: 'Reduce Filler Words',
      description: `You used ${metrics.fillerCount} filler words (${metrics.fillerPercentage}%). Try pausing silently instead of "um" or "uh".`
    });
  }

  if (metrics.wordsPerMinute < 120) {
    suggestions.push({
      icon: '⚡',
      title: 'Increase Your Pace',
      description: `Your pace is ${metrics.wordsPerMinute} WPM. Aim for 130-150 WPM for better engagement.`
    });
  } else if (metrics.wordsPerMinute > 170) {
    suggestions.push({
      icon: '🐢',
      title: 'Slow Down Slightly',
      description: `Speaking at ${metrics.wordsPerMinute} WPM. Aim for 130-160 WPM for clarity.`
    });
  }

  if (metrics.powerWords < 3) {
    suggestions.push({
      icon: '💪',
      title: 'Use More Power Words',
      description: `Only ${metrics.powerWords} power words detected. Use action words like "achieve", "create", "transform".`
    });
  }

  if (scores.confidence < 70) {
    suggestions.push({
      icon: '🎤',
      title: 'Build Speaking Confidence',
      description: `Confidence score: ${scores.confidence}/100. Practice in front of a mirror and record yourself.`
    });
  }

  if (suggestions.length === 0) {
    suggestions.push({
      icon: '🌟',
      title: 'Excellent Performance!',
      description: 'Your communication skills are strong. Keep practicing to maintain this level!'
    });
  }

  let html = '';
  suggestions.forEach(s => {
    html += `
      <div class="suggestion-card">
        <div class="suggestion-icon">${s.icon}</div>
        <div class="suggestion-content">
          <h4 class="suggestion-title">${s.title}</h4>
          <p class="suggestion-description">${s.description}</p>
        </div>
      </div>
    `;
  });

  suggestionsContent.innerHTML = html;
  improvementSuggestions.style.display = 'block';
  console.log('✅ Improvement suggestions displayed');
}

// ============================================================
// MISSING FUNCTION 7: generateAnalysisTitle
// ============================================================
async function generateAnalysisTitle(transcript) {
  try {
    const prompt = `Create a short title (max 6 words) for: "${transcript.substring(0, 200)}..." Return ONLY the title.`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CONFIG.groqApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: 'Create concise titles, max 6 words.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 20
      })
    });

    if (!response.ok) throw new Error('Groq API error');

    const data = await response.json();
    let title = data.choices[0].message.content.trim().replace(/^["']|["']$/g, '');
    const words = title.split(' ');
    if (words.length > 6) title = words.slice(0, 6).join(' ') + '...';

    return title;

  } catch (error) {
    console.error('Title generation error:', error);
    return `Analysis ${new Date().toLocaleDateString()}`;
  }
}

// ============================================================
// NEW FUNCTION: displayAnalysisResults (for results.html)
// ============================================================
function displayAnalysisResults(data) {
  const { scores, metrics, transcript, audioBlob } = data;

  // Show sections
  const sections = ['scoresSection', 'quickAnalysis', 'metricsSection', 'transcriptSection', 'scoreBreakdown'];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'block';
  });

  // Animate scores
  if (typeof animateScore === 'function') {
    animateScore('confidenceScore', scores.confidence, 'confidenceCircle');
    animateScore('authenticityScore', scores.authenticity, 'authenticityCircle');
    animateScore('engagementScore', scores.engagement, 'engagementCircle');
  }

  // Quick Analysis
  const quickElements = {
    'quickWordCount': metrics.wordCount,
    'quickPace': metrics.wordsPerMinute + ' WPM',
    'quickFillers': metrics.fillerPercentage + '%',
    'quickPowerWords': metrics.powerWords
  };

  Object.entries(quickElements).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });

  // Detailed Metrics
  const metricElements = {
    'metricDuration': formatTime(metrics.duration),
    'metricWords': metrics.wordCount,
    'metricWPM': metrics.wordsPerMinute,
    'metricFillers': metrics.fillerCount,
    'metricPowerWords': metrics.powerWords,
    'metricVocab': Math.round((metrics.uniqueWords / metrics.wordCount) * 100) + '%'
  };

  Object.entries(metricElements).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });

  // Display transcript
  displayEnhancedTranscript(transcript, []);

  // Audio player
  if (audioBlob) setupAudioPlayer(audioBlob);

  // Generate and display summary
  generateExecutiveSummary(transcript, scores, metrics).then(summary => {
    displayExecutiveSummary(summary);
  });

  // Display benchmarks and suggestions
  displayBenchmarkComparison(scores);
  displayImprovementSuggestions(scores, metrics);

  console.log('✅ All analysis results displayed');
}

// Helper function
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

console.log('✅ All critical functions loaded');
