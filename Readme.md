Incomeshield
AI-Powered Parametric Income Insurance for India's Food Delivery Workers

"If the rain stops a delivery partner from working, Incomeshield pays out automatically within 4 hours."


TEAM (CODEBASE)
- Sakala Neeraj — Team Lead; Backend Architecture and API Development
- Rishindra Varma Manthena — Frontend Development; React PWA and UI/UX
- Somesh Swadhin Biswal — AI/ML Engineer; Premium Model, Fraud Detection, and Risk Scoring
- Vankadaru Dhoni Venkata Sai Durga Praneeth — Integrations and DevOps; APIs, Payments, and Deployment


PROBLEM FRAMING
India has 5 million+ food delivery workers on Zomato and Swiggy. They are the backbone of the urban gig economy. But when disruptions hit (monsoon downpours, severe pollution days, or sudden local strikes), deliveries stop, orders vanish, and income disappears. Most workers have no financial safety net.

Scale of the problem (example: Hyderabad)
- Heavy Rain (IMD Red Alert): 18–22 days/year; average weekly income loss ₹800–₹1,400
- Severe AQI (above 300): 12–15 days/year; average weekly income loss ₹600–₹1,100
- Local Strike or Curfew: 4–8 events/year; average weekly income loss ₹400–₹900
- Extreme Heat (above 44°C): 10–14 days/year; average weekly income loss ₹500–₹900

Estimated annual loss
- A Standard-tier Zomato rider in Hyderabad loses an estimated ₹12,000–₹18,000 per year due to events outside their control.

Why existing insurance fails delivery workers
- Monthly premiums do not match weekly gig income cycles.
- Claim forms, agents, and 15–30 day settlement windows do not work for daily-wage workers.
- Most products cover health, accidents, or vehicles, not lost income caused by local disruptions.
- City-wide pricing ignores micro-risk. A rider in a flood-prone zone can face three times the disruption risk of a rider on higher ground.

Incomeshield is designed specifically to solve these gaps.


SOLUTION OVERVIEW
Incomeshield is a fully automated parametric income insurance platform built for food delivery workers.

What parametric means
- Incomeshield does not investigate whether a worker lost income.
- The policy defines triggers in advance (for example, rainfall crossing 35 mm/hr in a worker's zone).
- When the trigger occurs and the disruption is validated, payout happens automatically.

How it works (high level)
- Worker pays ₹25–₹80 per week
- Incomeshield monitors the worker's zone continuously
- Disruption detected and validated against platform signals
- UPI payout within 4 hours
- Worker receives a notification; no claim filing is required

Four pillars
- Zone-level precision: triggers and pricing are pin-code specific, not city-wide averages.
- Compound trigger logic: two moderate events that together imply a stoppage are evaluated together.
- Earnings-based payouts: payouts reflect the worker's earnings baseline, not a flat amount.
- Five-layer fraud protection: GPS validation, behavioral ML, and platform cross-checks reduce abuse.


PERSONA DEEP DIVE
Segment: food delivery partners (Zomato and Swiggy) in Tier-1 Indian cities
Launch city: Hyderabad
Phase 2 expansion: Bangalore and Mumbai

Primary persona: Delivery partner in Hyderabad
A delivery partner in Kondapur, Hyderabad typically works 8–9 hours daily, completes 45–55 deliveries per week, and earns about ₹3,200/week on good weeks. Many workers support families and have little to no savings buffer. One bad rain week can erase the grocery budget for the month.

What this worker needs
- Register in under 3 minutes (phone only).
- Pay weekly, not monthly.
- Receive payouts quickly, without follow-ups.
- Trust the system (no claim forms and no verification calls).

How Incomeshield supports this worker
- Phone OTP onboarding completed in 3 screens.
- AI recommends a tier (for example, Standard at ₹50/week) based on local risk.
- When a Red Alert hits, the payout is credited to UPI quickly.
- Weekly renewal notification keeps coverage status clear.

Secondary personas (examples)
- Swiggy delivery partner in Gurugram, Pro (₹80): winter AQI spikes (350+)
- Zomato delivery partner in Mumbai, Basic (₹25): coastal flooding and monsoon
- Swiggy delivery partner in Bangalore, Standard (₹50): strike and rain compound events


CORE DISRUPTION MODEL
All triggers are validated against a platform order-volume drop greater than 50 percent in the affected zone. This confirms the disruption caused real income loss.

Trigger definitions
- Heavy Rain
   - Threshold: above 35 mm/hr or IMD Red/Orange alert
   - Data sources: OpenWeatherMap and IMD
   - Severity score: rain_mm / 35 (capped at 3.0)

- Extreme Heat
   - Threshold: temperature above 44°C and heat index above 54°C
   - Data source: OpenWeatherMap
   - Severity score: (temp − 44) / 6

- Severe AQI
   - Threshold: AQI above 300
   - Data source: CPCB real-time feed
   - Severity score: (AQI − 300) / 200

- Compound Rain and AQI
   - Threshold: rain above 20 mm/hr and AQI above 200
   - Data sources: both APIs simultaneously
   - Severity score: (rain/20 + aqi/200) / 2

- Flood or Waterlogging
   - Threshold: active flood alert in the worker's pin-code zone
   - Data source: IMD flood bulletin
   - Severity score: binary 1.0

- Strike or Curfew
   - Threshold: news confirmation plus 70 percent or higher GPS worker inactivity
   - Data sources: News API and platform drop signal
   - Severity score: binary 1.0

Note on compound triggers
- Rain at 22 mm/hr alone may not halt work.
- AQI at 210 alone may not halt work.
- Together they can reliably stop deliveries. Incomeshield explicitly models this compounding effect.

Payout formula (simple and explainable)
- Daily earnings baseline = weekly_earnings_baseline / 7
- Payout = min(daily_earnings_baseline × severity_score, policy_coverage_cap)

Worked example (Standard tier, Heavy Rain)
- Weekly baseline: ₹3,200
- Daily baseline: ₹3,200 / 7 = ₹457
- Example severity score: 2.0
- Payout: ₹457 × 2.0 = ₹914
- Coverage cap: ₹1,200 (not breached)
- Final payout: ₹914


WEEKLY PRICING MODEL
Weekly Premium = Base Rate × Zone Risk Multiplier × Seasonal Factor × Loyalty Discount

Tier structure
- Basic: ₹25/week, coverage cap ₹500/week, target: part-time (under 30 deliveries/week)
- Standard: ₹50/week, coverage cap ₹1,200/week, target: regular (30–60 deliveries/week)
- Pro: ₹80/week, coverage cap ₹2,500/week, target: full-time (60+ deliveries/week)

Zone risk multiplier (pin-code level)
zone_multiplier = 0.8
                     + (flood_risk_score × 0.3)
                     + (avg_rain_days_month / 30 × 0.2)
                     + (avg_aqi_month / 500 × 0.1)

Typical range: 0.80 (lowest risk) to 1.40 (highest flood risk)

Price adjustments
- Seasonal uplift (June–September): +10 percent
- Predictive uplift (high-risk forecast week): +10 percent
- No-claim discount (4 consecutive clean weeks): −5 percent
- Loyalty discount (active policy over 3 months): −5 percent

Live calculation example
- Standard (₹50) × 1.2 (Kondapur zone) × 1.1 (July monsoon) × 0.95 (no-claim discount) = ₹62.70/week


AI/ML INTEGRATION STRATEGY
Model 1: Dynamic premium calculator (XGBoost regressor)
- Goal: compute a fair, hyper-local weekly premium multiplier for every worker.
- Input features: zone flood risk, zone average rain days/month, zone average AQI/month, delivery platform, city tier, week of year, worker past claim count, chosen tier.
- Output: premium multiplier (0.8 to 1.5).
- Training: 1,000+ synthetic worker records with seasonal, geographic, and behavioral variation.

Model 2: Fraud detection (Isolation Forest plus weighted rule engine)
- Goal: score every auto-triggered claim before releasing payout.
- Checks and weights
   - GPS zone validation (35 percent): worker location history during the event window is inside the zone.
   - Claim velocity (25 percent): more than 2 claims in 7 days is suspicious.
   - Platform activity contradiction (30 percent): deliveries happening during the claimed disruption.
   - Isolation Forest anomaly score (10 percent): claim features are statistical outliers.
   - GPS spoof detection (bonus flag): teleportation, boundary-hugging, mock location signatures.
- Decision thresholds
   - Score below 0.30: auto-approve, payout released immediately
   - Score 0.30–0.70: manual review, payout held
   - Score above 0.70: auto-reject, reason logged, worker notified

Model 3: Earnings baseline estimator
- Goal: estimate a personalized income baseline so payouts reflect real income.
- Baseline formula (recent weeks weighted higher)
   baseline = (week_4 × 0.10) + (week_3 × 0.20) + (week_2 × 0.30) + (week_1 × 0.40)

Model 4: Predictive risk dashboard (7-day forecast)
- Goal: forecast expected claims and ensure adequate reserves.
- Method: next-week weather forecast plus historical zone claim rates.


END-TO-END WORKFLOW
Worker enrollment
- Worker opens the Incomeshield PWA on any phone.
- Phone OTP login (Firebase), no email required.
- Profile: name, Aadhaar last 4, delivery platform, pin-code.
- AI risk profiling: zone scored, risk multiplier calculated.
- Tier recommendation shown (tier plus exact weekly premium).
- Worker activates coverage, policy created, UPI mandate set.

Real-time monitoring (every 15 minutes)
- APScheduler polls weather, AQI, and platform APIs per zone.
- Trigger engine evaluates all disruption conditions.
- If thresholds breach, a DisruptionEvent record is created.
- Platform order-volume is cross-checked (must show more than 50 percent drop).
- If confirmed, claims engine activates for the affected zone.

Automated claim processing (no worker action)
- Active policies in the affected zone are identified.
- Payout is calculated per worker (baseline and severity).
- Fraud score is computed using the weighted checks.
- Auto-approve, manual review, or auto-reject based on score.

Instant payout
- Razorpay UPI Payout API called (test mode).
- Amount credited to worker UPI within 4 hours.
- Worker notified (SMS mock plus in-app push).
- Dashboard updated (claim status and total earnings protected).

Auto renewal (every Sunday)
- Premium recalculated for the coming week.
- Discounts applied (no-claim streak and loyalty).
- UPI mandate deducts from the next Zomato/Swiggy payout.
- Worker receives a "Coverage renewed for ₹XX" notification.


FRAUD PREVENTION ARCHITECTURE
Parametric insurance is vulnerable to coordinated abuse. Incomeshield uses five layers to address common attack vectors.

GPS zone validation
- GPS is logged every 5 minutes during active coverage windows.
- At claim time, worker pings must be inside the disrupted pin-code zone during the event window.

GPS spoof detection
- Teleportation: consecutive pings are too far apart to be physically possible (80 km/hr cap).
- Boundary-hugging: pings cluster on zone edges.
- Mock GPS signatures: impossible sensor patterns (for example, 0 m accuracy or fixed altitude where it does not make sense).

Platform activity cross-check
- If the platform shows deliveries completed during the disruption window, the claim is contradicted and flagged.

Claim velocity monitor
- More than 2 claims in 7 days triggers a flag.
- More than 4 claims in 7 days triggers an automatic rejection.

Isolation Forest anomaly detection
- Features include payout-to-baseline ratio, hour of day, day of week, claims this month, and zone claim rate.
- Statistical outliers are escalated for review.

Trust score system
- Each worker has a trust score (0–100) based on clean history, GPS consistency, and account age.
- Higher trust can reduce friction and speed up payouts.

Circuit breaker
- If a zone generates more than three times its historical per-event claim rate in one disruption, payouts in that zone are paused and escalated for human review.


SYSTEM ARCHITECTURE
Architecture diagram: architecture.png

Five-layer architecture summary
- External data sources: OpenWeatherMap, CPCB AQI, IMD, Zomato/Swiggy mock, GPS service, Razorpay payment gateway
- AI risk engine: XGBoost premium calculator, parametric trigger detector, Isolation Forest fraud model, earnings baseline model
- Backend services: FastAPI plus APScheduler; auth, onboarding, policy, claims, payouts; 15-minute trigger polling; notifications
- Data layer: PostgreSQL, Redis, ML model store (pkl), zone risk table (pin-code)
- Frontend: React PWA (mobile-first); worker onboarding, dashboard, claims, admin dashboard


INTEGRATIONS PLAN
- OpenWeatherMap API (real, free tier): rain, temperature, hourly forecast per zone (Phase 2)
- CPCB AQI feed (real, free): real-time AQI per city (Phase 2)
- IMD flood bulletin (mock): flood alert zone confirmation (Phase 2)
- Zomato/Swiggy partner API (mock): order volume drop and worker activity status (Phase 2)
- Firebase phone auth (real): OTP login (Phase 2)
- Google Maps or Nominatim (real, free tier): pin-code to coordinates to zone mapping (Phase 2)
- APScheduler (built-in): 15-minute trigger polling loop (Phase 2)
- Razorpay payout API (test/sandbox): UPI payout simulation with webhooks (Phase 3)
- News API (mock): strike or curfew confirmation feed (Phase 3)

Reliability note
- External API calls should use graceful fallback to mock data to prevent demo breakage from rate limits or downtime.


SUCCESS METRICS
Product metrics (demo targets)
- Worker onboarding time: under 3 minutes end-to-end
- Trigger detection latency: under 15 minutes from event onset
- Claim-to-payout (auto-approved): under 4 hours
- Fraud detection precision: above 90 percent on a synthetic test set
- False positive rate (clean claims flagged): under 8 percent
- Premium model R2 score: above 0.85 on holdout test set

Business metrics (at scale)
- Total addressable market: about 5M workers × ₹2,600/year = ₹1,300 Cr
- Serviceable market (Tier-1 cities): about 1.5M workers = ₹390 Cr
- Break-even: under 1.5 claims/month per Standard-tier worker
- Target loss ratio: 65–75 percent
- Customer acquisition cost: ₹0 (embedded in partner app)
- Regulatory path: IRDA insurance sandbox (parametric products eligible since 2019)


UX STRATEGY
Core principle: Incomeshield must work for a delivery partner on a low-end Android phone, in about 2 minutes, mid-shift.

Why a progressive web app (not native)
- No app store approval delay.
- Installable via "Add to Home Screen".
- Works offline for key screens (service worker caching).
- Supports entry-level devices with fast load time.

Onboarding (3 screens)
- Screen 1: phone number and OTP verification
- Screen 2: name, Aadhaar last 4, city, platform (Zomato/Swiggy/Both)
- Screen 3: AI shows risk profile and recommended tier, tap to activate

Zero-action claims
- Workers never open the app to file a claim.
- Worker notifications (example)
   - Heavy rain detected in Kondapur. Your Incomeshield claim is processing automatically.
   - ₹914 credited to your UPI. Incomeshield protected your earnings today.

Dashboard focus (three answers only)
- Is my coverage active?
- How much has Incomeshield paid me?
- What is happening in my zone right now?


WHY THIS WILL WIN
Incomeshield versus a typical hackathon solution
- Trigger logic: 6 triggers including compound multi-signal detection
- Pricing granularity: pin-code level with an AI multiplier
- Payout amount: earnings baseline times severity, with a weekly cap
- Fraud detection: GPS, anomaly detection, platform contradiction, and spoof checks
- Worker UX: no claim filing
- Demo resilience: mock fallbacks prevent API downtime failures
- Business case: TAM/SAM, unit economics, and regulatory path
- Predictive layer: 7-day risk forecast for insurer reserve planning
- Trust system: behavioral trust score influences payout speed

Key takeaway
Incomeshield is designed so the worker never files a claim. The platform detects a disruption, validates income impact, and pays automatically.


TECH STACK
- Frontend: React 18 plus Vite (PWA)
- Styling: TailwindCSS plus Radix UI
- Backend: Python 3.11 plus FastAPI
- Scheduler: APScheduler
- Primary database: PostgreSQL
- Cache and queue: Redis
- ML models: scikit-learn, XGBoost, Isolation Forest
- Authentication: Firebase phone auth
- Payments: Razorpay test mode
- Weather data: OpenWeatherMap API
- Deployment: Render (API) and Vercel (frontend)
- CI/CD: GitHub Actions (run pytest on pushes to main)


DEVELOPMENT PLAN (PHASE 2 AND PHASE 3 ROADMAP)
Phase 1 complete (March 4–March 20)
- Completed: problem research, personas, competitive gap analysis
- Completed: triggers defined with thresholds
- Completed: weekly pricing formula plus worked example
- Completed: AI/ML strategy across models
- Completed: fraud prevention architecture
- Completed: tech stack selection
- Completed: system architecture diagram (architecture.png)
- Completed: AI workflow diagram (ai_workflow.png)
- Completed: README prepared for submission
- Pending: 2-minute strategy video (add link)

Phase 2: Automation and protection (March 21–April 4)
Theme: build registration, pricing, claims, and basic automation

Backend foundation
- PostgreSQL schema plus Alembic migrations (all 7 models)
- FastAPI project setup, CORS, env config, Docker compose
- Firebase phone OTP auth plus JWT middleware
- Worker profile API plus pin-code zone mapping
- XGBoost premium model (synthetic data, training, serialization)
- Risk profiler (zone to multiplier to tier recommendation)
- Weather and AQI API integration with mock fallback
- Mock Zomato/Swiggy platform activity API
- APScheduler trigger polling engine (all triggers)

Claims engine and frontend
- Zero-touch claims engine (detect to payout to approve)
- Policy creation, weekly billing, coverage cap logic
- Basic fraud scoring (velocity plus GPS validation)
- Mock payout service (Razorpay simulation)
- Onboarding flow UI (OTP, profile, plan select)
- Worker dashboard UI (coverage, earnings protected, claims list)
- Claims detail screen
- Phase 2 demo video (2 minutes)

Phase 2 exit criteria
- Worker can register, receive a risk profile, and activate a policy end-to-end
- At least 3 triggers connected to real or mock APIs
- Disruption event automatically creates a claim with a calculated payout
- Auto-approval works for clean fraud scores
- Worker dashboard shows live coverage status and claim history
- Demo video uploaded

Phase 3: Scale and optimize (April 5–April 17)
Theme: add intelligence, fraud ML, real payouts, and a polished insurer dashboard

Intelligence and fraud ML
- Isolation Forest fraud model training and integration
- GPS zone validation module
- GPS spoof detection (teleportation, boundary-hugging, mock apps)
- Worker trust score system (0–100)
- Circuit breaker (zone claim spike detection and auto-pause)
- Razorpay test-mode UPI payout integration
- Webhook handler for payout processed/failed
- Notification service (SMS mock plus in-app push)

Dashboards, demo, and submission
- Insurer admin dashboard (overview and zone risk table)
- Fraud review queue UI
- 7-day predictive risk forecast widget
- Demo simulator (force-trigger event to show payout)
- Seed data script
- pytest suite
- GitHub Actions CI workflow
- Final 5-minute walkthrough demo video
- Pitch deck PDF (10 slides) committed

Phase 3 exit criteria
- Isolation Forest model live with benchmark metrics
- GPS spoof detection active for all claim evaluations
- Razorpay test-mode payout working with webhook confirmation
- Worker dashboard includes lifetime earnings protected, active coverage days, and full claim history
- Insurer dashboard includes loss ratio, fraud queue, and 7-day forecast
- Live demo mode supports one-click trigger to payout
- Final demo video uploaded
- Pitch deck PDF included


AI WORKFLOW
AI workflow diagram: ai_workflow.png


Incomeshield · Team Codebase · Guidewire DEVTrails 2026
Protecting the last mile, one week at a time.