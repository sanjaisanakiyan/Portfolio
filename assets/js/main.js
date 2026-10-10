/**
 * SANJAI SANAKIYAN — GAME DESIGNER & ARTIST PORTFOLIO
 * High-performance, modular ES6+ vanilla script.
 * Includes: Ambient particle canvas, project case-study modal system,
 * skill & project filters, Web Audio UI synthesis, copy email toast, and responsive navigation.
 */

// ============================================================================
// 1. PROJECT DATA ARCHITECTURE (SINGLE SOURCE OF TRUTH)
// ============================================================================
const PROJECTS_DATA = {
  driving: {
    id: 'driving',
    title: 'BURNOUT BLITZ',
    subtitle: 'Arcade Driving Prototype',
    category: 'GAMEPLAY • VEHICLE SYSTEMS • AI',
    engine: 'Unity',
    role: 'Game Development / Gameplay Systems',
    heroImage: 'assets/images/portfolio/arcade-driving/driving-cover-cinematic.jpg',
    secondaryImage: 'assets/images/portfolio/arcade-driving/arcade-driving-garage.jpg',
    secondaryCaption: 'Garage-based car selection system & vehicle telemetry analysis',
    driveLink: 'https://drive.google.com/drive/folders/1qHLftPa75w1miNfKX7r1I1uUfMXf8MWi?usp=sharing',
    keySystems: ['Vehicle Controls', 'AI Traffic', 'Collision Detection', 'Garage System', 'Game Flow'],
    tabs: [
      { id: 'overview', label: 'OVERVIEW & ROLE' },
      { id: 'systems', label: 'KEY SYSTEMS & MECHANICS' },
      { id: 'casestudy', label: 'DEEP DIVE & ITERATION' },
      { id: 'gallery', label: 'PROJECT GALLERY' },
      { id: 'learnings', label: 'WHAT I LEARNED' }
    ],
    gallery: [
      {
        src: 'assets/images/portfolio/arcade-driving/driving-cover-cinematic.jpg',
        thumb: 'assets/images/portfolio/arcade-driving/driving-cover-cinematic.jpg',
        tag: 'PROJECT COVER',
        title: 'Burnout Blitz Cinematic Key Art',
        caption: 'Project Cover Artwork: High-impact cinematic promotional key art for Burnout Blitz, capturing responsive third-person driving, neon-lit urban city streets, and dynamic traffic pacing.'
      },
      {
        src: 'assets/images/portfolio/arcade-driving/arcade-driving-gameplay.jpg',
        thumb: 'assets/images/portfolio/arcade-driving/arcade-driving-gameplay.jpg',
        tag: 'GAMEPLAY',
        title: 'Active City Traffic Run',
        caption: 'Active Traffic Driving: AI-driven traffic vehicles populating city lanes with responsive third-person chase camera navigation and speed sensations.'
      },
      {
        src: 'assets/images/portfolio/arcade-driving/arcade-driving-garage.jpg',
        thumb: 'assets/images/portfolio/arcade-driving/arcade-driving-garage.jpg',
        tag: 'GARAGE / UI',
        title: 'Garage Vehicle Selection',
        caption: 'Garage Car Selection: Multi-vehicle inspection with vehicle telemetry specs and custom handling dynamics before entering traffic.'
      },
      {
        src: 'assets/images/portfolio/arcade-driving/arcade-driving-end.jpg',
        thumb: 'assets/images/portfolio/arcade-driving/arcade-driving-end.jpg',
        tag: 'GAME LOOP',
        title: 'Collision & Loss State',
        caption: 'Collision & Loss State: Real-time collision detection triggers, tire burnout smoke VFX, and structured restart/menu/exit state loop.'
      },
      {
        src: 'assets/images/portfolio/arcade-driving/arcade-driving-editor.jpg',
        thumb: 'assets/images/portfolio/arcade-driving/arcade-driving-editor.jpg',
        tag: 'IN-ENGINE',
        title: 'Unity 6 LTS Editor Telemetry',
        caption: 'Unity 6 LTS Editor: Custom WheelCollider friction tuning, center-of-mass balancing, and AI obstacle avoidance raycast gizmos.'
      }
    ],
    highlights: [
      'Responsive third-person vehicle controls',
      'AI-driven dynamic traffic simulation',
      'Real-time collision detection & physics response',
      'Garage-based car selection system',
      'Structured gameplay loop with state transitions',
      'Restart and exit game states'
    ],
    overview: 'An Unity-based arcade driving prototype featuring responsive third-person vehicle controls in a city traffic environment. Designed to explore vehicle physics responsiveness, player feedback on cornering and braking, dynamic obstacle avoidance with AI-driven traffic, and complete game loop state management.',
    designGoals: [
      'Deliver immediate, responsive arcade vehicle steering without unpredictable physics glitches.',
      'Implement AI traffic vehicles that populate road lanes and react predictably to player maneuvers.',
      'Establish a complete session loop from garage vehicle selection to gameplay, crash restart, and exit states.'
    ],
    gameplayMechanics: [
      'Third-Person Chase Camera: Smooth interpolation behind the vehicle with slight velocity-based FOV kick for speed sensation.',
      'Arcade Handling Model: Tuned lateral friction, acceleration curves, and braking grip to emphasize snappy cornering over heavy simulation.',
      'Real-Time Collision Detection: Custom collision triggers on chassis and bumper colliders to trigger impact impulse and hazard states.',
      'Garage Car Selection: Multi-vehicle selection menu allowing players to inspect vehicle specs and choose different driving dynamics.'
    ],
    technicalImplementation: [
      'Engine: Unity 3D with C# object-oriented gameplay architecture.',
      'Physics: Tuned WheelColliders and Rigidbody center-of-mass offsets to prevent vehicle tipping during sharp turns.',
      'AI Traffic System: Waypoint pathing and raycast-based front distance detection to trigger braking and lane following.',
      'State Machine: GameFlowManager managing Start, Garage, Active Drive, Crash/Restart, and Pause states.'
    ],
    gameplayLoopSteps: [
      { num: '01', title: 'GARAGE SELECTION', desc: 'Player selects car setup and reviews vehicle handling specs.' },
      { num: '02', title: 'TRAFFIC RUN', desc: 'Navigate high-speed city roads while dodging procedural AI traffic.' },
      { num: '03', title: 'COLLISION / RISK', desc: 'Near-misses reward precision; high-impact collisions trigger penalty state.' },
      { num: '04', title: 'RESTART / STATE LOOP', desc: 'Snappy reload to retry the run or return to the garage selection.' }
    ],
    challenges: [
      'WheelCollider instability at high angular velocities required custom anti-roll bar calculations.',
      'AI traffic lane-merging raycasts occasionally clipped adjacent vehicles, solved with segmented side proximity checks.'
    ],
    iteration: 'Early tests had overly floaty drift behavior that frustrated players. Progressively tuned tire grip friction and steering lerp curves to achieve snappy, satisfying arcade response.',
    finalResult: 'A polished, responsive arcade driving prototype that demonstrates solid gameplay systems design, vehicle mechanics, AI obstacle avoidance, and complete game loop structure.',
    whatILearned: 'Gained deep practical insights into balancing physics realism with game feel, optimizing real-time raycasts for AI pathing, and structuring clean C# gameplay state managers.'
  },

  maze: {
    id: 'maze',
    title: 'THIRD-PERSON MAZE',
    subtitle: 'Third-Person Level Design Prototype',
    category: 'LEVEL DESIGN • UNREAL ENGINE 5 • ENVIRONMENT',
    engine: 'Unreal Engine 5',
    role: 'Game Design / Level Design',
    heroImage: 'assets/images/portfolio/third-person-maze/maze-cover-cinematic.jpg',
    secondaryImage: 'assets/images/portfolio/third-person-maze/maze-map.jpg',
    secondaryCaption: 'Level layout blueprint map: branching paths, dead ends, and spatial landmarks',
    driveLink: 'https://drive.google.com/drive/folders/1gvHnf9RfiTiL2Uh77j3hLagwYHZ1gF3A?usp=drive_link',
    keySystems: ['Third-Person Navigation', 'Spatial Awareness', 'Graybox Layout', 'Lighting Landmarks', 'Blueprint Flow'],
    tabs: [
      { id: 'overview', label: 'OVERVIEW & ROLE' },
      { id: 'methodology', label: 'METHODOLOGY' },
      { id: 'systems', label: 'LEVEL DESIGN & MECHANICS' },
      { id: 'casestudy', label: 'DEEP DIVE & ITERATION' },
      { id: 'gallery', label: 'PROJECT GALLERY' },
      { id: 'learnings', label: 'WHAT I LEARNED' }
    ],
    overview: 'A third-person Unreal Engine 5 level-design prototype focused on navigating a complex maze environment through branching paths, dead ends and spatial navigation.',
    designGoals: [
      'Encourage spatial awareness.',
      'Create meaningful navigation choices.',
      'Use branching paths and dead ends to challenge orientation.',
      'Build a readable third-person environment.',
      'Explore how level geometry influences player navigation.'
    ],
    myRole: [
      'Level Design',
      'Graybox / Blockout',
      'Environment Construction',
      'Character & Camera Placement',
      'Blueprint Debugging',
      'Environmental Actor Setup',
      'Lighting Integration'
    ],
    highlights: [
      'Third-person player navigation',
      'Complex earth-toned maze layout',
      'Branching paths and strategic dead ends',
      'Spatial awareness & mental mapping challenges',
      'Graybox level design methodology',
      'Environmental lighting integration',
      'Character-camera placement',
      'Blueprint-based logic development'
    ],
    methodology: [
      {
        step: '01',
        title: 'RESEARCH & PLANNING',
        subtitle: 'SPATIAL INTENT & LABYRINTH ARCHITECTURE',
        category: 'STAGE 01 • PLANNING',
        description: 'Plan the intended navigation experience and overall maze structure. Focused on genuine player navigation, challenging spatial memory and orientation rather than relying on on-screen minimaps or artificial waypoints.',
        points: [
          '<strong>Intended Navigation Experience:</strong> Prioritized organic spatial deduction, requiring players to read corridor geometries, shadow angles, and overhead structures to orient themselves.',
          '<strong>Maze Structure Planning:</strong> Designed a central navigation spine with secondary loops and strategic dead ends to make every junction a conscious decision.',
          '<strong>Spatial Awareness & Landmarks:</strong> Positioned open atriums and high architectural arches at major intersections to serve as visual anchor points across corridors.',
          '<strong>Environment Direction:</strong> Established an earth-toned, monolithic stone aesthetic with strong directional sunlight to naturally differentiate illuminated passages from shadow.'
        ],
        diagram: {
          type: 'flow',
          nodes: [
            { label: 'SPATIAL INTENT', desc: 'Mental mapping focus without minimap assistance' },
            { label: 'MAZE STRUCTURE', desc: 'Central spine with calibrated branching forks' },
            { label: 'LANDMARK SIGHTLINES', desc: 'High archways serving as cardinal anchors' },
            { label: 'LIGHTING DIRECTION', desc: 'Natural sunlight angles separating paths' }
          ]
        }
      },
      {
        step: '02',
        title: 'BLOCKOUT / GRAYBOX',
        subtitle: 'SPATIAL PROTOTYPING & FLOW VALIDATION',
        category: 'STAGE 02 • PROTOTYPING',
        description: 'Establish maze geometry, branching paths, dead ends and basic player flow. Blocking out the level with primitive geometry in Unreal Engine 5 allowed rigorous evaluation of corridor proportions, branching paths, dead ends, and spatial relationships before focusing on visual presentation.',
        points: [
          '<strong>Maze Layout:</strong> Constructed an interconnected corridor network with calibrated traversal times between junctions.',
          '<strong>Branching Paths & Dead Ends:</strong> Evaluated decision forks to ensure dead ends felt purposeful and distinct rather than arbitrary dead stops.',
          '<strong>Basic Spatial Relationships:</strong> Calibrated corridor proportions (3.5m minimum width, 4m height) to ensure comfortable clearance for third-person player movement.',
          '<strong>Flow Evaluation:</strong> Validated player movement pacing and sightlines in graybox before committing to visual dressing passes.'
        ],
        image: 'assets/images/portfolio/third-person-maze/maze-map.jpg',
        imageCaption: 'Unreal Engine 5 Architectural Graybox Layout & Overhead Spatial Pathing Map',
        galleryIdx: 3
      },
      {
        step: '03',
        title: 'PLAYER & CAMERA',
        subtitle: 'THIRD-PERSON PERSPECTIVE & READABILITY',
        category: 'STAGE 03 • SYSTEMS',
        description: 'Set up the third-person character and camera relationship to the environment. Implementing a third-person perspective inside narrow maze corridors required careful technical consideration to preserve player visibility, maintain corridor readability, and prevent jarring camera collisions with surrounding geometry.',
        points: [
          '<strong>Character Placement:</strong> Positioned the third-person explorer with grounded scale relative to the enclosing 4-meter corridor walls.',
          '<strong>Camera Positioning & SpringArm:</strong> Configured camera boom length (320 units) with smooth collision probe filtering to prevent the camera from popping abruptly when scraping walls.',
          '<strong>Player Visibility:</strong> Maintained an over-the-shoulder clearance that keeps the character silhouette distinct against dimly lit corridor backgrounds.',
          '<strong>Navigation Readability:</strong> Restricted camera pitch extremes so the player always has eyes on upcoming floor junctions and architectural headers.',
          '<strong>Perspective vs Geometry:</strong> Beveled blind 90-degree corners to expand the camera frustum slightly before the character turns into new corridors.'
        ],
        image: 'assets/images/portfolio/third-person-maze/maze-gameplay.jpg',
        imageCaption: 'In-Engine Third-Person Camera Placement & Character Navigation View',
        galleryIdx: 1
      },
      {
        step: '04',
        title: 'ENVIRONMENT DEVELOPMENT',
        subtitle: 'EARTH-TONE WORLD BUILDING & INTEGRATION',
        category: 'STAGE 04 • ENVIRONMENT',
        description: 'Develop the environment, geometry, environmental actors and lighting. Transitioned the validated graybox level toward its final environment presentation by applying an earth-toned visual direction, integrating Blueprint environmental actors, and composing the spatial environment with dynamic lighting.',
        points: [
          '<strong>Environmental Geometry:</strong> Replaced temporary graybox brushes with modular sandstone walls, heavy stone lintels, and paved walkways.',
          '<strong>Earth-Tone Visual Direction:</strong> Unified the scene with weathered ochre, warm sand, and terracotta materials to create a grounded, ancient atmosphere.',
          '<strong>Environmental Actors:</strong> Placed Blueprint-driven environmental props, boundary arches, and portal thresholds to visually communicate zone transitions.',
          '<strong>Spatial Composition:</strong> Framed high-contrast open courtyards against confined hallways to create rhythmic contrast between tension and release.',
          '<strong>Lighting Integration:</strong> Integrated Lumen dynamic global illumination and directional sunlight, utilizing light shafts as subconscious navigational breadcrumbs.'
        ],
        image: 'assets/images/portfolio/third-person-maze/maze-editor.jpg',
        imageCaption: 'Unreal Engine 5 Outliner & World Composition: Actors, Lumen Lighting & Fog Setup',
        galleryIdx: 4
      },
      {
        step: '05',
        title: 'ITERATION & DEBUGGING',
        subtitle: 'LAYOUT TUNING & BLUEPRINT TROUBLESHOOTING',
        category: 'STAGE 05 • REFINEMENT',
        description: 'Refine the layout and resolve technical/environmental issues through iteration and Blueprint debugging. Engaged in a continuous cycle of playtesting, layout refinement, and Blueprint debugging to resolve navigation friction, collision snags, and pacing issues across the labyrinth.',
        points: [
          '<strong>Testing Maze Layout:</strong> Identified that early dead ends were overly long and caused backtracking fatigue; shortened return corridors and added unique architectural motifs to dead ends.',
          '<strong>Identifying Navigation Issues:</strong> Noticed players struggled with uniform corridor looks; added subtle height steps and light shafts at key intersections to aid orientation.',
          '<strong>Refining Environment:</strong> Softened harsh shadow cutoffs in side alcoves using ambient fill lights without losing the mystery of darker branches.',
          '<strong>Blueprint Debugging:</strong> Debugged trigger zones and event dispatchers to ensure seamless character spawn logic and goal-threshold detection.',
          '<strong>Adjusting Environmental Actors:</strong> Replaced auto-generated complex mesh collisions with custom simplified box collisions along corridor walls to prevent snagging during sprint.',
          '<strong>Improving Player/Camera Placement:</strong> Fine-tuned camera lag damping to smooth out rapid mouse panning around tight maze corners.'
        ],
        diagram: {
          type: 'matrix',
          items: [
            { problem: 'Backtracking Fatigue', fix: 'Shortened dead ends & added distinct landmark motifs' },
            { problem: 'Corridor Snagging', fix: 'Converted to simplified box collision boundaries' },
            { problem: 'Camera Popping', fix: 'Tuned SpringArm probe radius & added lag damping' },
            { problem: 'Path Disorientation', fix: 'Positioned Lumen sunbeam shafts at key junctions' }
          ]
        }
      },
      {
        step: '06',
        title: 'FINAL PRESENTATION',
        subtitle: 'LIGHTING, ATMOSPHERE & COMPOSITION',
        category: 'STAGE 06 • PRESENTATION',
        description: 'Use lighting, composition and camera positioning to present the finished environment. Brings together architectural composition, Lumen dynamic lighting, and cinematic third-person framing to deliver a polished, portfolio-ready level design prototype.',
        points: [
          '<strong>Lighting & Volumetrics:</strong> Lumen bounce lighting combined with Exponential Height Fog produces volumetric light shafts that guide player gaze toward key exits.',
          '<strong>Architectural Composition:</strong> Structured sightlines where towering walls frame open sky atriums, giving players a sense of scale and progression.',
          '<strong>Third-Person Camera Perspective:</strong> Polished camera framing captures both character motion and the imposing verticality of the surrounding maze walls.',
          '<strong>Environmental Readability:</strong> Balanced light exposure ensures dark corners remain mysterious without sacrificing spatial clarity or causing player frustration.',
          '<strong>Overall Visual Presentation:</strong> Delivered a high-fidelity real-time showcase combining strong architectural silhouettes, naturalistic lighting, and responsive player navigation.'
        ],
        image: 'assets/images/portfolio/third-person-maze/maze-cover-cinematic.jpg',
        imageCaption: 'Final Third-Person Cinematic Presentation: Atmospheric Lighting & Composition Showcase',
        galleryIdx: 0
      }
    ],
    mazeStructure: [
      '<strong>Branching Paths:</strong> Structured decision forks offering high-visibility illuminated routes versus sheltered corridors to test navigation choices.',
      '<strong>Dead Ends:</strong> Calibrated dead ends featuring distinct architectural motifs to inform the player they have explored that branch without frustrating backtracking.',
      '<strong>Navigation Choices:</strong> Multiple intersecting loops allowing players to formulate alternative routing paths through the labyrinth.',
      '<strong>Spatial Relationships:</strong> Strict proportioning (3.5m corridor width, 4m wall height) to balance claustrophobic tension with third-person spatial readability.',
      '<strong>Player Orientation:</strong> Tall landmark archways and cardinal sun angles acting as constant directional anchors throughout the maze.'
    ],
    thirdPersonNav: [
      '<strong>Camera Boom Tuning:</strong> 320-unit SpringArm camera length with collision probe filtering to prevent camera clipping through sandstone walls.',
      '<strong>Over-the-Shoulder Clearance:</strong> Character silhouette offset to maintain sightlines on upcoming junctions, doorway thresholds, and path intersections.',
      '<strong>Pitch & Yaw Constraints:</strong> Restrained vertical camera limits to prevent disorienting ceiling occlusion while maintaining full view of ground junctions.',
      '<strong>Corner Frustum Expansion:</strong> Beveled 90-degree corridor corners allowing the third-person camera to peek slightly around corners before turning.'
    ],
    environmentDesign: [
      '<strong>Graybox Geometry:</strong> Core layout established entirely with primitive blockout volumes before applying environment meshes.',
      '<strong>Earth-Tone Color Palette:</strong> Monolithic weathered ochre, sandstone, and terracotta materials creating a cohesive, grounded world.',
      '<strong>Environmental Composition:</strong> Alternating tight, shadowed corridors with expansive sunlit courtyards to build pacing and rhythmic tension.',
      '<strong>Lighting Integration:</strong> Lumen dynamic global illumination and Directional Sun creating volumetric light shafts as natural waypoints.',
      '<strong>Spatial Readability:</strong> High contrast between illuminated corridors and shadowy side alcoves provides immediate visual readability.'
    ],
    playerExperience: [
      '<strong>Exploration:</strong> Rewarding spatial deduction and curiosity without hand-holding minimaps or floating objective arrows.',
      '<strong>Navigation:</strong> Natural wayfinding driven by environmental cues, architectural headers, and volumetric lightbeams.',
      '<strong>Spatial Awareness:</strong> Testing the player\'s mental map and recall of previously visited intersections and landmarks.',
      '<strong>Orientation:</strong> Using natural sunlight direction and towering portal gates to maintain cardinal orientation.',
      '<strong>Decision-Making:</strong> Every corridor fork presents clear visual trade-offs between open sightlines and shadowed depth.'
    ],
    gallery: [
      {
        src: 'assets/images/portfolio/third-person-maze/maze-cover-cinematic.jpg',
        thumb: 'assets/images/portfolio/third-person-maze/maze-cover-cinematic.jpg',
        tag: 'PROJECT COVER',
        title: 'Third-Person Maze Cinematic Key Art',
        caption: 'Final Environment: Cinematic promotional showcase for Third-Person Maze, framing the third-person explorer overlooking the massive earth-toned labyrinth and volumetric sunlight shafts.'
      },
      {
        src: 'assets/images/portfolio/third-person-maze/maze-gameplay.jpg',
        thumb: 'assets/images/portfolio/third-person-maze/maze-gameplay.jpg',
        tag: 'GAMEPLAY VIEW',
        title: 'Third-Person Character Navigation',
        caption: 'Third-Person Gameplay: Character navigation through earth-toned labyrinth corridors with tuned camera rotation clearance and lighting landmarks.'
      },
      {
        src: 'assets/images/portfolio/third-person-maze/maze-map-editor.jpg',
        thumb: 'assets/images/portfolio/third-person-maze/maze-map-editor.jpg',
        tag: 'GRAYBOX / BLOCKOUT',
        title: 'Maze Blockout Schematic Editor',
        caption: 'Blockout Development: In-engine editor view demonstrating geometric corridor proportions, branching intersections, and player navigation pathways.'
      },
      {
        src: 'assets/images/portfolio/third-person-maze/maze-map.jpg',
        thumb: 'assets/images/portfolio/third-person-maze/maze-map.jpg',
        tag: 'LAYOUT MAP',
        title: 'Architectural Spatial Layout Map',
        caption: 'Maze Layout & Spatial Map: Top-down blueprint layout demonstrating deliberate branching paths, dead ends, and cardinal orientation sightlines.'
      },
      {
        src: 'assets/images/portfolio/third-person-maze/maze-editor.jpg',
        thumb: 'assets/images/portfolio/third-person-maze/maze-editor.jpg',
        tag: 'TECHNICAL SETUP',
        title: 'Unreal Engine 5 Outliner & World Setup',
        caption: 'Technical Setup: Unreal Engine 5 outliner and viewport showing Blueprint environmental actors, Exponential Height Fog, Lumen lighting, and actor collision bounds.'
      }
    ],
    technicalImplementation: [
      'Engine: Unreal Engine 5 with Blueprint visual scripting.',
      'Camera Setup: SpringArm component with camera lag and fine-tuned pitch limits tailored for corridor navigation.',
      'Lighting: Lumen dynamic global illumination with Directional Sun and Exponential Height Fog to produce volumetric lightbeams.',
      'Collision: Clean simplified box collisions on all wall meshes to prevent player snagging.'
    ],
    challenges: [
      'Labyrinths can easily cause frustration if players feel disoriented with zero progress indicators. Solved by introducing distinct architectural landmarks and lighting variances.',
      'Tight 90-degree corners obstructed player sightlines; softened corner bevels to telegraph incoming path splits.'
    ],
    iteration: 'Iterated through 3 distinct layout passes. Pass 1 was too symmetrical and caused total disorientation. Pass 2 added distinct height variations. Pass 3 finalized the current layout with optimal dead-end pacing and architectural readability.',
    finalResult: 'A compelling, atmospheric third-person level design prototype that challenges player memory and spatial intuition while maintaining engaging pacing.',
    whatILearned: 'Learned the critical value of architectural readability, sightline management, and camera-to-environment spatial clearance in 3D level design.'
  },

  scroller: {
    id: 'scroller',
    title: 'SNOWBALL FIGHT',
    subtitle: '2D Arena Combat & Projectile Physics',
    category: '2D GAMEPLAY • COMBAT PHYSICS • MULTIPLAYER',
    engine: 'Unity 6',
    role: 'Game Development / 2D Gameplay & Combat Mechanics',
    heroImage: 'assets/images/snowball-cover-cinematic.jpg',
    secondaryImage: 'assets/images/Snowball3.png',
    secondaryCaption: 'Unity 6 Editor breakdown: PlayerController C# script, input mappings (K/Semicolon/O/Quote), BoxCollider2D & Snowball projectile instantiation',
    driveLink: 'https://drive.google.com/drive/folders/1QTZcfc8K9JQZpSMYd7RHCt46htROJFCq?usp=sharing',
    keySystems: ['Snowball Projectile Physics', '2-Player Local Combat', 'Candy-Cane Health HUD', 'Platform Traversal', 'Audio & Particle VFX'],
    tabs: [
      { id: 'overview', label: 'OVERVIEW & ROLE' },
      { id: 'systems', label: 'KEY SYSTEMS & MECHANICS' },
      { id: 'casestudy', label: 'DEEP DIVE & ITERATION' },
      { id: 'gallery', label: 'PROJECT GALLERY' },
      { id: 'learnings', label: 'WHAT I LEARNED' }
    ],
    gallery: [
      {
        src: 'assets/images/snowball-cover-cinematic.jpg',
        thumb: 'assets/images/snowball-cover-cinematic.jpg',
        tag: 'PROJECT COVER',
        title: 'Snowball Fight Key Art & Atmosphere',
        caption: 'Cinematic promotional key art: High-impact winter arena combat duel under the full moon featuring physics-driven snowball projectile arcs, explosive particle VFX, and festive arena platforming.'
      },
      {
        src: 'assets/images/Snowball2.png',
        thumb: 'assets/images/Snowball2.png',
        tag: 'COMBAT & UI',
        title: 'Two-Player Duel & Health HUD',
        caption: 'Combat Architecture & Audio: Player 1 (Blue) vs Player 2 (Green) combat spacing, custom 5-point candy-cane health point UI system, throw/hurt audio triggers, and victory state detection.'
      },
      {
        src: 'assets/images/Snowball3.png',
        thumb: 'assets/images/Snowball3.png',
        tag: 'C# SCRIPT / TECH',
        title: 'PlayerController & Projectile Systems',
        caption: 'Unity 6 Inspector Breakdown: PlayerController C# architecture managing movement velocity (Speed: 10, Jump: 20), dedicated throw points, BoxCollider2D tuning, ground check raycasts, and Snowball prefab instantiation.'
      },
      {
        src: 'assets/images/Snowball4.png',
        thumb: 'assets/images/Snowball4.png',
        tag: 'MENU / STATE',
        title: 'SnowBall Fight Main Menu',
        caption: 'Main Menu State Flow: Clean canvas UI presentation with Start and Quit controls, snowy pine forest backdrop, and Menu script managing scene transitions into the combat arena.'
      },
      {
        src: 'assets/images/Snowball1.png',
        thumb: 'assets/images/Snowball1.png',
        tag: 'SCENE HIERARCHY',
        title: 'Level Hierarchy & Prefab Structure',
        caption: 'Unity Hierarchy & Prefabs: Modular platform architecture (Platform 3, 5, 7), directional lighting, global volume, snowball impact particle clones, and prefab asset organization.'
      }
    ],
    highlights: [
      'Snowball projectile physics',
      '2-Player local arena combat',
      'Trajectory & throw velocity mechanics',
      'Tiered platform navigation & jumping',
      '5-point candy-cane health HUD',
      'Dynamic snowfall particle effects',
      'Menu state transitions & victory flow'
    ],
    overview: 'A Unity 6 2D local multiplayer arena combat prototype focused on responsive snowball projectile throwing and precision platform traversal. Built with modular snow platforms, dual-player keyboard control mappings, 5-point candy-cane health tracking, and dynamic winter particle atmosphere.',
    designGoals: [
      'Deliver responsive, satisfying arc trajectories for thrown snowball projectiles with clear visual and audio impact feedback.',
      'Design balanced 2-player local arena combat with tiered platforms encouraging vertical traversal and strategic positioning.',
      'Implement clean scene transitions and match flow from Main Menu to active arena duel and victory condition screens.'
    ],
    gameplayMechanics: [
      'Snowball Projectile Physics: Forward velocity impulse, dedicated throw-point transforms, projectile trigger colliders, and impact particle spawning.',
      '2-Player Duel Combat: Independent control schemes (Player 1 & Player 2), 5-point candy-cane health tracking, and hurt audio reactions.',
      'Platform Traversal: Calibrated jump force (20) and movement speed (10) across multi-tiered snow-topped platforms with grounded raycast checks.'
    ],
    vfxAndAtmosphere: [
      'Dynamic Snowfall Particles: Shuriken particle system with randomized flake velocity, wind drift turbulence, and foreground depth.',
      'Winter Arena Atmosphere: Pixel-art mountain backdrop under a full moon with snowy pines, decorative candy canes, and festive props.',
      'Audio & Visual Impact: Dedicated audio triggers for throw, hurt, and victory states paired with instantaneous snowball impact burst VFX.'
    ],
    technicalImplementation: [
      'Engine: Unity 6 LTS (6000.6.3f1) with Universal Render Pipeline (2D Sprite-Unlit).',
      'PlayerController Architecture: C# script managing horizontal velocity (10), jump impulse (20), dual input polling, and snowball instantiation.',
      'Physics & Colliders: BoxCollider2D on players, Composite/Box colliders on platforms, and kinematic/trigger colliders on projectiles.',
      'UI & State System: Canvas with Canvas Scaler, TextMeshPro victory banners (P1Win/P2Win), and Menu script for scene transitions.'
    ],
    challenges: [
      'Simultaneous dual-player keyboard input polling without dropped key events during intense jump-and-throw exchanges.',
      'Snowball projectile collision detection at high velocities, resolved using continuous collision detection and dedicated trigger volumes.'
    ],
    iteration: 'Initial snowball trajectory felt too flat and lacked tactical arc. Calibrated projectile gravity scale and forward impulse to create satisfying parabolic throwing arcs that reward positioning over button mashing.',
    finalResult: 'A fun, responsive 2D local multiplayer winter arena combat prototype that showcases solid projectile physics, platforming mechanics, and cohesive festive presentation.',
    whatILearned: 'Gained practical insights into dual-player local control architecture, 2D projectile trajectory tuning, collision layering, and synchronizing audio-visual feedback loops.'
  },

  environment: {
    id: 'environment',
    title: 'IMPERIAL HANGAR',
    subtitle: 'Cinematic 3D Environment & Technical Art',
    category: 'LIGHTING • VFX • CINEMATIC PRESENTATION',
    engine: 'Unreal Engine 5 & Blender',
    role: 'Environment Artist & Lighting / Technical Presentation',
    heroImage: 'assets/images/portfolio/cinematic-environment/hangar-cover-cinematic.jpg',
    secondaryImage: 'assets/images/portfolio/cinematic-environment/cinematic-corridor-breakdown.jpg',
    secondaryCaption: 'Lighting breakdown sheet: 1. Unlit Graybox, 2. Global & Volumetric Pass, 3. Rim & VFX, 4. Final Post-Process',
    driveLink: 'https://drive.google.com/drive/folders/1zGgl4j7DXApgY53wCyXXkQ_auMhkfxrR?usp=drive_link',
    keySystems: ['Volumetric Lighting', 'Mechanical Animation', 'Atmospheric VFX', 'Camera Composition', 'Color Grading'],
    tabs: [
      { id: 'overview', label: 'OVERVIEW & ROLE' },
      { id: 'systems', label: 'KEY SYSTEMS & MECHANICS' },
      { id: 'casestudy', label: 'DEEP DIVE & ITERATION' },
      { id: 'gallery', label: 'PROJECT GALLERY' },
      { id: 'learnings', label: 'WHAT I LEARNED' }
    ],
    gallery: [
      {
        src: 'assets/images/portfolio/cinematic-environment/hangar-cover-cinematic.jpg',
        thumb: 'assets/images/portfolio/cinematic-environment/hangar-cover-cinematic.jpg',
        tag: 'PROJECT COVER',
        title: 'Imperial Hangar Cinematic Key Art',
        caption: 'Project Cover Artwork: Cinematic key art showcase for Imperial Hangar, framing stormtrooper formations and starfighters inside an industrial sci-fi starship hangar.'
      },
      {
        src: 'assets/images/portfolio/cinematic-environment/cinematic-environment-final.jpg',
        thumb: 'assets/images/portfolio/cinematic-environment/cinematic-environment-final.jpg',
        tag: 'FINAL RENDER',
        title: 'Imperial Hangar Cinematic Pass',
        caption: 'Imperial Hangar Final Pass: Volumetric lighting, suspended TIE fighter, polished floor reflections and marching stormtrooper ranks.'
      },
      {
        src: 'assets/images/portfolio/cinematic-environment/cinematic-corridor-breakdown.jpg',
        thumb: 'assets/images/portfolio/cinematic-environment/cinematic-corridor-breakdown.jpg',
        tag: 'BLOCKOUT',
        title: 'Spaceship Corridor Blockout',
        caption: 'Spaceship Corridor Blockout: Unreal Engine 5 hard-surface modular geometry, RectLight positioning and unlit blockout breakdown.'
      },
      {
        src: 'assets/images/portfolio/cinematic-environment/hangar-spacecraft-study.png',
        rawPng: 'images/Screenshot 2026-09-26 145138.png',
        thumb: 'images/Screenshot 2026-09-26 145138.png',
        tag: 'ENVIRONMENT STUDY',
        title: 'Futuristic Spacecraft Hangar Environment Study',
        caption: 'Environment Art Study: Futuristic spacecraft hangar environment created in Unreal Engine, exploring industrial scale, symmetrical composition, atmospheric lighting, reflective surfaces, and cinematic world-building.'
      }
    ],
    highlights: [
      'Mechanical hydraulic animation',
      'Volumetric lighting & exponential height fog',
      'Particle VFX & spark emitters',
      'Cinematic camera composition',
      'Environmental storytelling',
      'Final-pass post-processing development'
    ],
    overview: 'A cinematic 3D environment project focused on transforming a static environment into a high-stakes narrative moment through lighting, animation, VFX, and camera work. Demonstrates how atmospheric depth, volumetric contrast, and mechanical motion create visceral environmental storytelling.',
    designGoals: [
      'Transform an industrial hangar environment into a high-stakes narrative setting using lighting and volumetric mood.',
      'Integrate mechanical animations and synchronized atmospheric VFX (sparks, steam, floating dust motes) to make the scene feel alive.',
      'Apply cinematic camera principles—wide anamorphic framing, rule-of-thirds focal balance, and dual rim lighting.'
    ],
    fromEnvironmentToExperience: [
      'Pass 1 — Unlit Blockout: Established silhouette clarity, scale proportions, and primary vehicle focal placement inside the hangar.',
      'Pass 2 — Primary Atmospheric Pass: Implemented directional sunlight piercing roof apertures, coupled with UE5 Exponential Height Fog with volumetric scattering enabled.',
      'Pass 3 — Secondary Rim, Fills & VFX: Positioned high-intensity cyan and amber fill lights to accentuate mechanical hard edges, while adding ember and spark particle systems.',
      'Pass 4 — Final Color Grading & Post-Processing: Post Process Volume with subtle bloom, chromatic aberration at lens edges, custom ACES tonemapping curve, and cinematic depth of field.'
    ],
    technicalImplementation: [
      '3D Modeling & Animation: Blender for hard-surface mechanical assets and hydraulic gear rotation.',
      'Engine & Lighting: Unreal Engine 5 with Lumen Global Illumination, Volumetric Fog, and Niagara particle emitters.',
      'Cinematics: UE5 Cine Camera Actor with 35mm sensor format, anamorphic aspect ratio, and manual focus tracking.'
    ],
    challenges: [
      'Balancing high-contrast dark industrial shadows without losing critical silhouette definition. Solved using low-intensity bounce fills with complementary cool cyan color palettes.',
      'Managing volumetric fog performance while preserving crisp lightbeam godrays. Tuned volumetric fog grid resolution and scattering density multipliers.'
    ],
    iteration: 'The earliest render felt flat and static. Adding rotating warning beacons, localized smoke puffs, and dual-tone amber/cyan color contrast transformed it from a standard 3D showcase into a cinematic narrative moment.',
    finalResult: 'An evocative, studio-quality cinematic environment that demonstrates expertise in lighting composition, technical art, VFX integration, and dramatic visual storytelling.',
    whatILearned: 'Gained practical expertise in Unreal Engine 5 cinematic rendering pipelines, volumetric lighting mathematics, and how deliberate art direction guides player focus.'
  }
};

// Backward-compatible alias for Snowball Fight project
PROJECTS_DATA.snowball = PROJECTS_DATA.scroller;

// ============================================================================
// 2. WEB AUDIO API SYNTHESIZER (SUBTLE STUDIO UI SOUNDS)
// ============================================================================
class StudioAudioSystem {
  constructor() {
    this.ctx = null;
    this.enabled = false;
    this.initUserInteractionListener();
  }

  initUserInteractionListener() {
    const enableAudio = () => {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      window.removeEventListener('click', enableAudio);
    };
    window.addEventListener('click', enableAudio, { once: true });
  }

  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled && this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.enabled;
  }

  playBlip(freq = 600, duration = 0.04, type = 'sine') {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // AudioContext safe fail
    }
  }

  playOpen() {
    if (!this.enabled || !this.ctx) return;
    this.playBlip(440, 0.05, 'triangle');
    setTimeout(() => this.playBlip(880, 0.06, 'sine'), 40);
  }

  playClose() {
    if (!this.enabled || !this.ctx) return;
    this.playBlip(680, 0.04, 'sine');
    setTimeout(() => this.playBlip(340, 0.05, 'triangle'), 30);
  }
}

const studioAudio = new StudioAudioSystem();

// ============================================================================
// 3. AMBIENT PARTICLES CANVAS (ENGINE VIEWPORT DUST & EMBERS)
// ============================================================================
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(window.innerWidth < 768 ? 24 : 50, 60);

  // Check reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 0.6;
      this.speedX = (Math.random() - 0.5) * 0.35;
      this.speedY = -Math.random() * 0.45 - 0.15;
      this.alpha = Math.random() * 0.45 + 0.1;
      this.pulseSpeed = Math.random() * 0.02 + 0.008;
      this.colorType = Math.random() > 0.4 ? 'amber' : 'cyan';
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.alpha += Math.sin(Date.now() * this.pulseSpeed) * 0.005;

      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset();
        this.y = height + 10;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      if (this.colorType === 'amber') {
        ctx.fillStyle = `rgba(245, 158, 11, ${Math.max(0.05, this.alpha)})`;
      } else {
        ctx.fillStyle = `rgba(6, 182, 212, ${Math.max(0.05, this.alpha)})`;
      }
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  let animationFrameId;
  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    animationFrameId = requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  // Pause when tab is inactive to preserve CPU / battery
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      animate();
    }
  });
}

// ============================================================================
// 4. HEADER NAVIGATION & SCROLL SPY
// ============================================================================
function initNavigation() {
  const header = document.getElementById('site-header');
  const navLinks = document.getElementById('nav-links');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navItems = document.querySelectorAll('.nav-link');
  const targetSectionIds = ['home', 'about', 'methodology', 'skills', 'projects', 'experience', 'education', 'contact'];

  // Scroll Compact Header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile Menu Toggle
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', isOpen);
      studioAudio.playBlip(700, 0.03);
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open') && !header.contains(e.target)) {
        navLinks.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll handler for all internal navigation anchors
  const allAnchors = document.querySelectorAll('a[href^="#"]');
  allAnchors.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetHref = link.getAttribute('href');
      if (targetHref && targetHref.length > 1 && !targetHref.startsWith('#!')) {
        const targetElement = document.querySelector(targetHref);
        if (targetElement) {
          e.preventDefault();
          const headerHeight = header ? header.offsetHeight : 80;
          const targetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight + 2;

          window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: 'smooth'
          });

          // Update active link immediately for snappy visual feedback
          if (link.classList.contains('nav-link')) {
            navItems.forEach((item) => item.classList.remove('active'));
            link.classList.add('active');
          }

          // Close mobile menu if open
          if (navLinks && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
          }

          studioAudio.playBlip(720, 0.02);
        }
      }
    });
  });

  // Active Section Scroll Spy
  const updateActiveSectionOnScroll = () => {
    const headerHeight = header ? header.offsetHeight : 80;
    const scrollPos = window.scrollY + headerHeight + 60;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    // At top of page -> Home
    if (window.scrollY < 120) {
      navItems.forEach((item) => {
        item.classList.toggle('active', item.getAttribute('href') === '#home');
      });
      return;
    }

    // At bottom of page -> Contact
    if (window.scrollY + windowHeight >= documentHeight - 60) {
      navItems.forEach((item) => {
        item.classList.toggle('active', item.getAttribute('href') === '#contact');
      });
      return;
    }

    let currentSectionId = 'home';
    targetSectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        if (scrollPos >= top) {
          currentSectionId = id;
        }
      }
    });

    navItems.forEach((item) => {
      item.classList.toggle('active', item.getAttribute('href') === `#${currentSectionId}`);
    });
  };

  window.addEventListener('scroll', updateActiveSectionOnScroll, { passive: true });
  updateActiveSectionOnScroll();

  // Audio Toggle Button
  const audioBtn = document.getElementById('btn-audio-toggle');
  const soundOffIcon = document.getElementById('icon-sound-off');
  const soundOnIcon = document.getElementById('icon-sound-on');

  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      const isEnabled = studioAudio.toggle();
      audioBtn.classList.toggle('active', isEnabled);
      if (isEnabled) {
        soundOffIcon.style.display = 'none';
        soundOnIcon.style.display = 'block';
        showToast('UI Sound Effects: Enabled');
        studioAudio.playBlip(880, 0.05);
      } else {
        soundOffIcon.style.display = 'block';
        soundOnIcon.style.display = 'none';
        showToast('UI Sound Effects: Muted');
      }
    });
  }
}

// ============================================================================
// 5. SKILLS MATRIX FILTERING
// ============================================================================
function initSkillsFilter() {
  const filterButtons = document.querySelectorAll('[data-skill-filter]');
  const skillCards = document.querySelectorAll('.skill-category-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      studioAudio.playBlip(750, 0.03);
      const filter = btn.getAttribute('data-skill-filter');

      skillCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ============================================================================
// 6. PROJECT SHOWCASE FILTERING
// ============================================================================
function initProjectsFilter() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('.project-card-large');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      studioAudio.playBlip(680, 0.03);
      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const engine = card.getAttribute('data-engine');
        const type = card.getAttribute('data-type');

        let isMatch = false;
        if (filter === 'all') isMatch = true;
        else if (filter === 'unity' && engine === 'unity') isMatch = true;
        else if (filter === 'unreal' && engine === 'unreal') isMatch = true;
        else if (filter === 'level-design' && type === 'level-design') isMatch = true;
        else if (filter === 'cinematic' && type === 'cinematic') isMatch = true;

        if (isMatch) {
          card.style.display = 'grid';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ============================================================================
// 7. REUSABLE PROJECT CASE STUDY MODAL SYSTEM
// ============================================================================
let activeProjectId = null;
let activeModalTab = 'overview';
let isProgrammaticModalScroll = false;
let modalScrollTimeout = null;

function openProjectModal(projectId) {
  const project = PROJECTS_DATA[projectId];
  if (!project) return;

  activeProjectId = projectId;
  activeModalTab = 'overview';

  studioAudio.playOpen();

  const modal = document.getElementById('project-modal');
  const heroImg = document.getElementById('modal-hero-image');
  const catElem = document.getElementById('modal-project-category');
  const titleElem = document.getElementById('modal-project-title');
  const metaBar = document.getElementById('modal-meta-specs-bar');
  const modalContainer = document.getElementById('modal-container');

  // Populate Header
  heroImg.src = project.heroImage;
  heroImg.alt = project.title;
  catElem.textContent = project.category;
  titleElem.textContent = project.title;

  metaBar.innerHTML = `
    <span class="modal-spec-chip">ROLE: <strong>${project.role}</strong></span>
    <span class="modal-spec-chip">ENGINE: <strong>${project.engine}</strong></span>
    <a href="${project.driveLink}" target="_blank" rel="noopener noreferrer" class="btn-external-link" style="padding: 4px 10px; font-size: 0.72rem;">
      <span>PORTFOLIO DRIVE ARCHIVE &nearr;</span>
    </a>
  `;

  // Render Tabs in header
  const tabsHeader = document.querySelector('.modal-tabs-header');
  if (tabsHeader) {
    const tabs = project.tabs || [
      { id: 'overview', label: 'OVERVIEW & ROLE' },
      { id: 'systems', label: 'KEY SYSTEMS & MECHANICS' },
      { id: 'casestudy', label: 'DEEP DIVE & ITERATION' },
      { id: 'gallery', label: 'PROJECT GALLERY' },
      { id: 'learnings', label: 'WHAT I LEARNED' }
    ];
    tabsHeader.innerHTML = tabs.map((t, idx) => `
      <button type="button" class="modal-tab-trigger ${idx === 0 ? 'active' : ''}" data-modal-tab="${t.id}">${t.label}</button>
    `).join('');
    tabsHeader.scrollLeft = 0;
  }

  // Render all case study sections into modal body
  renderAllModalSections(project);

  // Reset scroll to top
  if (modalContainer) {
    modalContainer.scrollTop = 0;
  }

  // Open modal
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  studioAudio.playClose();
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  activeProjectId = null;
}

function scrollToModalSection(tabId) {
  const modalContainer = document.getElementById('modal-container');
  const targetSec = document.getElementById(`modal-sec-${tabId}`);
  if (!modalContainer || !targetSec) return;

  isProgrammaticModalScroll = true;

  // Update tab buttons immediately
  setActiveTabIndicator(tabId);

  const headerHeight = document.querySelector('.modal-tabs-header')?.offsetHeight || 55;
  const containerRect = modalContainer.getBoundingClientRect();
  const targetRect = targetSec.getBoundingClientRect();
  const targetScrollTop = modalContainer.scrollTop + (targetRect.top - containerRect.top) - headerHeight;

  modalContainer.scrollTo({
    top: Math.max(0, targetScrollTop),
    behavior: 'smooth'
  });

  clearTimeout(modalScrollTimeout);
  modalScrollTimeout = setTimeout(() => {
    isProgrammaticModalScroll = false;
  }, 650);
}

function setActiveTabIndicator(tabId) {
  activeModalTab = tabId;
  const tabsHeader = document.querySelector('.modal-tabs-header');
  if (!tabsHeader) return;

  const tabButtons = tabsHeader.querySelectorAll('.modal-tab-trigger');
  tabButtons.forEach(btn => {
    if (btn.getAttribute('data-modal-tab') === tabId) {
      btn.classList.add('active');
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    } else {
      btn.classList.remove('active');
    }
  });
}

function handleModalScroll() {
  if (isProgrammaticModalScroll) return;
  const modalContainer = document.getElementById('modal-container');
  if (!modalContainer) return;

  const sections = modalContainer.querySelectorAll('.modal-section[data-modal-section]');
  if (!sections.length) return;

  // Check if scrolled near the bottom of modal container
  if (modalContainer.scrollHeight - modalContainer.scrollTop - modalContainer.clientHeight < 40) {
    const lastSec = sections[sections.length - 1];
    const lastSecId = lastSec.getAttribute('data-modal-section');
    if (lastSecId && lastSecId !== activeModalTab) {
      setActiveTabIndicator(lastSecId);
    }
    return;
  }

  const headerHeight = document.querySelector('.modal-tabs-header')?.offsetHeight || 55;
  const containerRect = modalContainer.getBoundingClientRect();

  let activeSecId = null;
  sections.forEach((sec) => {
    const secRect = sec.getBoundingClientRect();
    const relativeTop = secRect.top - containerRect.top - headerHeight;
    if (relativeTop <= 80) {
      activeSecId = sec.getAttribute('data-modal-section');
    }
  });

  if (activeSecId && activeSecId !== activeModalTab) {
    setActiveTabIndicator(activeSecId);
  }
}

function initModalTabs() {
  const tabsHeader = document.querySelector('.modal-tabs-header');
  if (tabsHeader) {
    tabsHeader.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-modal-tab]');
      if (!btn) return;

      const tabId = btn.getAttribute('data-modal-tab');
      studioAudio.playBlip(780, 0.03);
      scrollToModalSection(tabId);
    });
  }

  const modalContainer = document.getElementById('modal-container');
  if (modalContainer) {
    modalContainer.addEventListener('scroll', handleModalScroll, { passive: true });
  }

  // Close on backdrop click
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }

  // Keyboard navigation: Escape to close, Left/Right arrow keys to cycle projects
  window.addEventListener('keydown', (e) => {
    if (!activeProjectId) return;

    if (e.key === 'Escape') {
      closeProjectModal();
    } else if (e.key === 'ArrowRight') {
      cycleProject(1);
    } else if (e.key === 'ArrowLeft') {
      cycleProject(-1);
    }
  });
}

function cycleProject(offset) {
  const projectKeys = Object.keys(PROJECTS_DATA);
  const currentIndex = projectKeys.indexOf(activeProjectId);
  if (currentIndex === -1) return;

  let nextIndex = (currentIndex + offset + projectKeys.length) % projectKeys.length;
  openProjectModal(projectKeys[nextIndex]);
}

function renderAllModalSections(project) {
  const container = document.getElementById('modal-body-content');
  if (!container) return;

  let sectionsHtml = '';

  // 1. Overview Section
  sectionsHtml += `
    <section class="modal-section" id="modal-sec-overview" data-modal-section="overview">
      ${renderOverviewContent(project)}
    </section>
  `;

  // 2. Methodology Section (if configured for this project)
  if (project.methodology && project.methodology.length > 0) {
    sectionsHtml += `
      <section class="modal-section" id="modal-sec-methodology" data-modal-section="methodology">
        ${renderMethodologyContent(project)}
      </section>
    `;
  }

  // 3. Systems / Level Design Section
  sectionsHtml += `
    <section class="modal-section" id="modal-sec-systems" data-modal-section="systems">
      ${renderSystemsContent(project)}
    </section>
  `;

  // 4. Deep Dive & Iteration Section
  sectionsHtml += `
    <section class="modal-section" id="modal-sec-casestudy" data-modal-section="casestudy">
      ${renderCaseStudyContent(project)}
    </section>
  `;

  // 5. Gallery Section
  sectionsHtml += `
    <section class="modal-section" id="modal-sec-gallery" data-modal-section="gallery">
      ${renderGalleryContent(project)}
    </section>
  `;

  // 6. What I Learned Section
  sectionsHtml += `
    <section class="modal-section" id="modal-sec-learnings" data-modal-section="learnings">
      ${renderLearningsContent(project)}
    </section>
  `;

  // 7. Previous / Next Project Navigation Bar
  const projectOrder = [
    { id: 'driving', num: '01', title: 'ARCADE DRIVING' },
    { id: 'maze', num: '02', title: 'THIRD-PERSON MAZE' },
    { id: 'scroller', num: '03', title: 'SNOWBALL FIGHT' },
    { id: 'environment', num: '04', title: 'CINEMATIC 3D ENVIRONMENT' }
  ];

  const currentIdx = projectOrder.findIndex((p) => p.id === project.id);
  if (currentIdx !== -1) {
    const prevIdx = (currentIdx - 1 + projectOrder.length) % projectOrder.length;
    const nextIdx = (currentIdx + 1) % projectOrder.length;
    const prevProj = projectOrder[prevIdx];
    const nextProj = projectOrder[nextIdx];

    sectionsHtml += `
      <div class="modal-project-nav-footer">
        <button type="button" class="btn-modal-proj-nav prev" onclick="openProjectModal('${prevProj.id}')" aria-label="View ${prevProj.title}">
          <span class="nav-dir-tag">&larr; ${prevProj.title}</span>
          <span class="nav-proj-name">${prevProj.num} &mdash; ${prevProj.title}</span>
        </button>
        <button type="button" class="btn-modal-proj-nav next" onclick="openProjectModal('${nextProj.id}')" aria-label="View ${nextProj.title}">
          <span class="nav-dir-tag">${nextProj.title} &rarr;</span>
          <span class="nav-proj-name">${nextProj.num} &mdash; ${nextProj.title}</span>
        </button>
      </div>
    `;
  }

  container.innerHTML = sectionsHtml;
}

function renderOverviewContent(project) {
  return `
    <div class="modal-case-study-section">
      <div class="case-study-block">
        <h4>PROJECT OVERVIEW</h4>
        <p>${project.overview}</p>
      </div>

      <div class="case-study-block">
        <h4 class="cyan">CORE DESIGN GOALS</h4>
        <ul>
          ${project.designGoals.map((g) => `<li>${g}</li>`).join('')}
        </ul>
      </div>

      ${
        project.myRole
          ? `
        <div class="case-study-block">
          <h4>MY ROLE</h4>
          <ul>
            ${project.myRole.map((r) => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      `
          : project.highlights
          ? `
        <div class="case-study-block">
          <h4>HIGHLIGHTED SYSTEMS &amp; CAPABILITIES</h4>
          <ul>
            ${project.highlights.map((h) => `<li>${h}</li>`).join('')}
          </ul>
        </div>
      `
          : ''
      }

      ${
        project.secondaryImage
          ? `
        <div class="case-study-media-box">
          <img src="${project.secondaryImage}" alt="${project.secondaryCaption}" loading="lazy">
          <div class="case-study-media-caption">
            <span>${project.secondaryCaption}</span>
            <span>ENGINE: ${project.engine.toUpperCase()}</span>
          </div>
        </div>
      `
          : ''
      }
    </div>
  `;
}

function renderMethodologyContent(project) {
  if (!project.methodology || !project.methodology.length) return '';

  return `
    <div class="modal-case-study-section">
      <div class="methodology-header">
        <h3>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          METHODOLOGY
        </h3>
        <p>A step-by-step breakdown of how I approached the level-design challenge: moving methodically from spatial planning and graybox validation through player-camera tuning, environment dressing, Blueprint debugging, and final presentation.</p>
      </div>

      <div class="methodology-grid">
        ${project.methodology
          .map(
            (step) => `
          <div class="methodology-step-card">
            <div class="methodology-step-top">
              <div class="methodology-step-num-badge">
                <span class="methodology-step-num">${step.step}</span>
                <div class="methodology-step-info">
                  <span class="methodology-step-title">${step.title}</span>
                  <span class="methodology-step-subtitle">${step.subtitle}</span>
                </div>
              </div>
              <span class="methodology-step-tag">${step.category}</span>
            </div>

            <p class="methodology-step-desc">${step.description}</p>

            <ul class="methodology-step-bullets">
              ${step.points.map((pt) => `<li>${pt}</li>`).join('')}
            </ul>

            ${
              step.image
                ? `
              <div class="methodology-media-wrap" onclick="openLightbox('${project.id}', ${step.galleryIdx !== undefined ? step.galleryIdx : 0})" role="button" tabindex="0" aria-label="View ${step.title} in Lightbox">
                <img src="${step.image}" alt="${step.title}" loading="lazy">
                <div class="methodology-media-overlay">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                  <span>EXPAND LIGHTBOX</span>
                </div>
                <div class="methodology-media-caption">
                  <span>${step.imageCaption}</span>
                </div>
              </div>
            `
                : ''
            }

            ${
              step.diagram && step.diagram.type === 'flow'
                ? `
              <div class="methodology-diagram-panel">
                <div class="methodology-diagram-title">ARCHITECTURAL DESIGN INTENT TRACK</div>
                <div class="methodology-flow-track">
                  ${step.diagram.nodes
                    .map(
                      (n) => `
                    <div class="methodology-flow-node">
                      <div class="node-label">${n.label}</div>
                      <div class="node-desc">${n.desc}</div>
                    </div>
                  `
                    )
                    .join('')}
                </div>
              </div>
            `
                : ''
            }

            ${
              step.diagram && step.diagram.type === 'matrix'
                ? `
              <div class="methodology-diagram-panel">
                <div class="methodology-diagram-title">IN-ENGINE ITERATION &amp; TROUBLESHOOTING MATRIX</div>
                <div class="methodology-matrix-grid">
                  ${step.diagram.items
                    .map(
                      (it) => `
                    <div class="methodology-matrix-row">
                      <span class="methodology-matrix-issue">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                        ${it.problem}
                      </span>
                      <span class="methodology-matrix-arrow">&rarr;</span>
                      <span class="methodology-matrix-fix">${it.fix}</span>
                    </div>
                  `
                    )
                    .join('')}
                </div>
              </div>
            `
                : ''
            }
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;
}

function renderSystemsContent(project) {
  if (project.id === 'driving') {
    return `
      <div class="modal-case-study-section">
        <div class="case-study-block">
          <h4>HOW IT WORKS — GAMEPLAY LOOP</h4>
          <div class="loop-visualizer">
            ${project.gameplayLoopSteps
              .map(
                (step) => `
              <div class="loop-step">
                <div class="loop-step-idx">${step.num}</div>
                <div class="loop-step-title">${step.title}</div>
                <div class="loop-step-desc">${step.desc}</div>
              </div>
            `
              )
              .join('')}
          </div>
        </div>

        <div class="case-study-block">
          <h4 class="cyan">KEY SYSTEMS &amp; MECHANICS</h4>
          <ul>
            ${project.gameplayMechanics.map((m) => `<li>${m}</li>`).join('')}
          </ul>
        </div>

        <div class="case-study-block">
          <h4>TECHNICAL IMPLEMENTATION</h4>
          <ul>
            ${project.technicalImplementation.map((t) => `<li>${t}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  } else if (project.id === 'maze') {
    return `
      <div class="modal-case-study-section">
        <div class="case-study-block">
          <h4>MAZE STRUCTURE</h4>
          <p>The maze layout was engineered to test navigation without artificial waypoints. The environment uses deliberate branching forks, dead ends, and sightline relationships to establish clear navigation choices and test player orientation.</p>
          <ul>
            ${project.mazeStructure.map((s) => `<li>${s}</li>`).join('')}
          </ul>
        </div>

        <div class="case-study-block">
          <h4 class="cyan">THIRD-PERSON NAVIGATION</h4>
          <p>Designing navigation from a third-person camera perspective required tight architectural tolerances to maintain sightline clarity and prevent camera occlusion.</p>
          <ul>
            ${project.thirdPersonNav.map((n) => `<li>${n}</li>`).join('')}
          </ul>
        </div>

        <div class="case-study-media-box">
          <img src="assets/images/portfolio/third-person-maze/maze-map.jpg" alt="Architectural Spatial Blueprint Layout Map" loading="lazy">
          <div class="case-study-media-caption">
            <span>LEVEL BLUEPRINT LAYOUT SCHEMATIC</span>
            <span>UE5 SPATIAL ARCHITECTURE &bull; BRANCHING PATHS &amp; DEAD ENDS</span>
          </div>
        </div>

        <div class="case-study-block">
          <h4>ENVIRONMENT DESIGN</h4>
          <p>The visual construction transitions from initial graybox geometry into an earth-toned architectural aesthetic designed to reinforce spatial readability.</p>
          <ul>
            ${project.environmentDesign.map((e) => `<li>${e}</li>`).join('')}
          </ul>
        </div>

        <div class="case-study-block">
          <h4 class="cyan">PLAYER EXPERIENCE</h4>
          <p>Every corridor and atrium was tuned around core experiential pillars:</p>
          <ul>
            ${project.playerExperience.map((p) => `<li>${p}</li>`).join('')}
          </ul>
        </div>

        <div class="case-study-media-box">
          <img src="assets/images/portfolio/third-person-maze/maze-editor.jpg" alt="Unreal Engine 5 In-Engine Viewport Setup" loading="lazy">
          <div class="case-study-media-caption">
            <span>UNREAL ENGINE 5 WORLD COMPOSITION</span>
            <span>BLUEPRINT ENVIRONMENTAL ACTORS, LUMEN LIGHTING &amp; EXPONENTIAL FOG</span>
          </div>
        </div>
      </div>
    `;
  } else if (project.id === 'scroller') {
    return `
      <div class="modal-case-study-section">
        <div class="case-study-block">
          <h4>SNOWBALL PROJECTILE &amp; ARENA COMBAT MECHANICS</h4>
          <ul>
            ${project.gameplayMechanics.map((m) => `<li>${m}</li>`).join('')}
          </ul>
        </div>

        <div class="case-study-media-box">
          <img src="${project.secondaryImage}" alt="${project.secondaryCaption}" loading="lazy">
          <div class="case-study-media-caption">
            <span>UNITY 6 C# PLAYERCONTROLLER &amp; BOXCOLLIDER2D BREAKDOWN</span>
            <span>PROJECTILE INSTANTIATION &amp; INPUT MAPPINGS</span>
          </div>
        </div>

        <div class="case-study-block">
          <h4 class="cyan">VFX, ATMOSPHERE &amp; PLAYER FEEDBACK</h4>
          <ul>
            ${project.vfxAndAtmosphere.map((v) => `<li>${v}</li>`).join('')}
          </ul>
        </div>

        <div class="case-study-block">
          <h4>TECHNICAL IMPLEMENTATION</h4>
          <ul>
            ${project.technicalImplementation.map((t) => `<li>${t}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  } else if (project.id === 'environment') {
    return `
      <div class="modal-case-study-section">
        <div class="case-study-block">
          <h4>FROM ENVIRONMENT TO EXPERIENCE</h4>
          <p>How lighting, VFX, animation, and camera work were combined to transform a static 3D environment into a cinematic and narrative-focused experience.</p>
        </div>

        <div class="case-study-block">
          <h4 class="cyan">DEVELOPMENT PASSES BREAKDOWN</h4>
          <ul>
            ${project.fromEnvironmentToExperience.map((p) => `<li>${p}</li>`).join('')}
          </ul>
        </div>

        <div class="case-study-media-box">
          <img src="${project.secondaryImage}" alt="${project.secondaryCaption}" loading="lazy">
          <div class="case-study-media-caption">
            <span>UE5 CINEMATIC LIGHTING BREAKDOWN SHEET (PASSES 1 THROUGH 4)</span>
            <span>TECHNICAL ARTIST PROCESS</span>
          </div>
        </div>
      </div>
    `;
  }
  return '';
}

function renderCaseStudyContent(project) {
  if (project.id === 'maze') {
    return `
      <div class="modal-case-study-section">
        <div class="case-study-block">
          <h4>LEVEL BLOCKOUT</h4>
          <p>Development began with a comprehensive graybox blockout in Unreal Engine 5 using primitive modeling brushes. This phase established corridor proportions (minimum 3.5m clearance, 4m height), validated sightlines, and established basic player pacing before committing to final meshes or lighting passes.</p>
        </div>

        <div class="case-study-block">
          <h4 class="cyan">PATH DESIGN</h4>
          <p>The labyrinth path structure balances challenge and fairness. Primary branching forks present players with meaningful directional choices (open sunlit atriums versus covered corridors). Dead ends were purposefully capped with distinct architectural reliefs so players instantly recognize visited dead branches without frustrating backtracking confusion.</p>
        </div>

        <div class="case-study-media-box">
          <img src="assets/images/portfolio/third-person-maze/maze-map-editor.jpg" alt="Unreal Engine 5 Blockout Schematic Editor View" loading="lazy">
          <div class="case-study-media-caption">
            <span>UNREAL ENGINE 5 BLOCKOUT SCHEMATIC VIEW</span>
            <span>CORRIDOR PROPORTIONS, FORK ANGLES &amp; SIGHTLINE CLEARANCE</span>
          </div>
        </div>

        <div class="case-study-block">
          <h4>BLUEPRINT / TECHNICAL WORK</h4>
          <ul>
            <li><strong>Blueprint Debugging:</strong> Developed and debugged character spawn logic, trigger volume boundaries, and goal-threshold dispatchers to ensure stable game loop execution.</li>
            <li><strong>Environmental Actor Setup:</strong> Placed and configured Blueprint-driven environmental props, boundary arches, and transition portal triggers.</li>
            <li><strong>Character-Camera Placement:</strong> Tuned the third-person SpringArm boom length, camera lag damping, and pitch limiters to prevent jarring geometry clipping in tight corners.</li>
            <li><strong>Environment Integration:</strong> Replaced auto-generated complex mesh collisions with custom simplified box colliders along corridor walls to prevent sprint snagging.</li>
          </ul>
        </div>

        <div class="case-study-block">
          <h4 class="cyan">LIGHTING &amp; PRESENTATION</h4>
          <p>Lumen dynamic global illumination, directional sunlight, and Exponential Height Fog were calibrated to serve dual roles: artistic mood and gameplay wayfinding. Warm directional sunbeams highlight major decision courtyards, creating subconscious navigational breadcrumbs that guide players through the maze.</p>
        </div>

        <div class="case-study-block">
          <h4>ITERATION PROCESS</h4>
          <p>${project.iteration}</p>
        </div>

        <div class="case-study-block">
          <h4 class="cyan">FINAL RESULT</h4>
          <p>${project.finalResult}</p>
        </div>
      </div>
    `;
  }

  return `
    <div class="modal-case-study-section">
      <div class="case-study-block">
        <h4>TECHNICAL CHALLENGES &amp; PROBLEM SOLVING</h4>
        <ul>
          ${project.challenges.map((c) => `<li>${c}</li>`).join('')}
        </ul>
      </div>

      <div class="case-study-block">
        <h4 class="cyan">ITERATION PROCESS</h4>
        <p>${project.iteration}</p>
      </div>

      <div class="case-study-block">
        <h4>FINAL RESULT</h4>
        <p>${project.finalResult}</p>
      </div>
    </div>
  `;
}

function renderGalleryContent(project) {
  return `
    <div class="modal-case-study-section">
      <div class="case-study-block">
        <h4>PROJECT MEDIA GALLERY &amp; BREAKDOWNS</h4>
        <p>Explore high-resolution visual passes, gameplay captures, and in-engine editor setups. Click any image to open the cinema-grade fullscreen lightbox viewer.</p>
      </div>

      <div class="modal-gallery-grid">
        ${project.gallery
          .map(
            (item, idx) => `
          <div class="modal-gallery-card" onclick="openLightbox('${project.id}', ${idx})" role="button" tabindex="0" aria-label="View ${item.title}">
            <div class="modal-gallery-media-wrapper">
              <img src="${item.src}" alt="${item.title}" loading="lazy">
              <span class="modal-gallery-tag">${item.tag}</span>
              <div class="modal-gallery-hover-overlay">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                <span>EXPAND LIGHTBOX</span>
              </div>
            </div>
            <div class="modal-gallery-info">
              <h5>${item.title}</h5>
              <p>${item.caption}</p>
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;
}

function renderLearningsContent(project) {
  const isMaze = project.id === 'maze';

  return `
    <div class="modal-case-study-section">
      <div class="case-study-block">
        <h4 class="cyan">WHAT I LEARNED</h4>
        <p style="font-size: 1.05rem; line-height: 1.75; margin-bottom: 20px;">${project.whatILearned}</p>
        
        ${
          isMaze
            ? `
          <div class="learnings-pillars-grid">
            <div class="learning-pillar-card">
              <div class="pillar-label">01 &bull; LEVEL DESIGN</div>
              <h5>Layout &amp; Navigation</h5>
              <p>Understanding how physical layout, corridor dimensions, and decision junctions directly govern player movement velocity, pacing, and pathing intuition.</p>
            </div>
            <div class="learning-pillar-card">
              <div class="pillar-label">02 &bull; SPATIAL AWARENESS</div>
              <h5>Orientation &amp; Landmarks</h5>
              <p>Understanding how environmental structure, vertical architectural arches, and lighting contrast maintain player mental mapping without artificial UI waypoints.</p>
            </div>
            <div class="learning-pillar-card">
              <div class="pillar-label">03 &bull; ITERATION</div>
              <h5>Blockouts &amp; Refinement</h5>
              <p>Learning how rapid blockout passes and systematic friction testing reveal geometry snags, camera clipping, and dead-end pacing early in the design cycle.</p>
            </div>
            <div class="learning-pillar-card">
              <div class="pillar-label">04 &bull; UNREAL ENGINE 5</div>
              <h5>Technical Systems &amp; Art</h5>
              <p>Developing practical expertise in UE5 level construction, Blueprint event debugging, SpringArm camera collision setup, environmental actors, and Lumen lighting.</p>
            </div>
          </div>
        `
            : ''
        }
      </div>

      <div class="case-study-block" style="background: rgba(255,255,255,0.02); padding: 24px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
        <h4 style="font-size: 1.1rem; margin-bottom: 8px;">VERIFIED PORTFOLIO SOURCE ARCHIVE</h4>
        <p style="font-size: 0.95rem; margin-bottom: 16px;">Access detailed design boards, build video captures, and project source documentation stored in the Google Drive archive.</p>
        <a href="${project.driveLink}" target="_blank" rel="noopener noreferrer" class="btn-primary-cinematic" style="display:inline-flex; width:auto; padding: 10px 20px; font-size: 0.8rem;">
          <span>OPEN PROJECT GOOGLE DRIVE</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
    </div>
  `;
}

// Backwards-compatibility alias for modal tab rendering
function renderModalTabContent(project, tab) {
  scrollToModalSection(tab);
}

// ============================================================================
// 7.1 CARD INTERACTIVE GALLERY SWITCHER
// ============================================================================
function switchProjectCardImage(projectId, imageIndex) {
  const project = PROJECTS_DATA[projectId];
  if (!project || !project.gallery || !project.gallery[imageIndex]) return;

  const card = document.getElementById(`card-project-${projectId}`);
  if (!card) return;

  const mainImg = card.querySelector('.project-image');
  const badgeTag = card.querySelector('.project-gallery-badge-tag');
  const badgeIdx = card.querySelector('.project-gallery-badge-idx');
  const badge = card.querySelector('.project-gallery-badge');
  const mediaCol = card.querySelector('.project-media-col');
  const thumbs = card.querySelectorAll('.project-gallery-thumb');

  const selectedItem = project.gallery[imageIndex];

  if (mainImg) {
    mainImg.style.opacity = '0.3';
    mainImg.style.transform = 'scale(0.98)';
    setTimeout(() => {
      mainImg.src = selectedItem.src;
      mainImg.alt = selectedItem.caption;
      mainImg.style.opacity = '1';
      mainImg.style.transform = 'scale(1)';
    }, 120);
  }

  if (badgeTag) badgeTag.textContent = selectedItem.tag;
  if (badgeIdx) badgeIdx.textContent = `${imageIndex + 1} / ${project.gallery.length}`;
  if (badge && (!badgeTag || !badgeIdx)) {
    const span = badge.querySelector('span');
    if (span) span.textContent = `${imageIndex + 1} / ${project.gallery.length} • ${selectedItem.tag}`;
  }

  // Update thumbnail buttons active state
  thumbs.forEach((t, i) => {
    if (i === imageIndex) {
      t.classList.add('active');
      t.setAttribute('aria-selected', 'true');
    } else {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    }
  });

  if (mediaCol) {
    mediaCol.setAttribute('data-active-index', imageIndex);
  }

  studioAudio.playBlip(720, 0.02);
}

// Quick handler when clicking card main image
function handleCardImageClick(projectId) {
  const card = document.getElementById(`card-project-${projectId}`);
  let idx = 0;
  if (card) {
    const mediaCol = card.querySelector('.project-media-col');
    if (mediaCol && mediaCol.hasAttribute('data-active-index')) {
      idx = parseInt(mediaCol.getAttribute('data-active-index'), 10) || 0;
    }
  }
  openLightbox(projectId, idx);
}

// ============================================================================
// 7.2 CINEMA-GRADE LIGHTBOX SYSTEM
// ============================================================================
let activeLightbox = {
  projectId: null,
  index: 0
};

function openLightbox(projectId, imageIndex = 0) {
  const project = PROJECTS_DATA[projectId];
  if (!project || !project.gallery) return;

  activeLightbox.projectId = projectId;
  activeLightbox.index = Math.max(0, Math.min(imageIndex, project.gallery.length - 1));

  const lbModal = document.getElementById('lightbox-modal');
  if (!lbModal) return;

  renderLightboxContent();

  lbModal.classList.add('active');
  lbModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  studioAudio.playOpen();
}

function closeLightbox() {
  const lbModal = document.getElementById('lightbox-modal');
  if (!lbModal) return;

  lbModal.classList.remove('active');
  lbModal.setAttribute('aria-hidden', 'true');

  const projectModal = document.getElementById('project-modal');
  if (!projectModal || !projectModal.classList.contains('active')) {
    document.body.style.overflow = '';
  }

  studioAudio.playClose();
  activeLightbox.projectId = null;
}

function navigateLightbox(step) {
  if (!activeLightbox.projectId) return;
  const project = PROJECTS_DATA[activeLightbox.projectId];
  if (!project || !project.gallery) return;

  const count = project.gallery.length;
  activeLightbox.index = (activeLightbox.index + step + count) % count;

  renderLightboxContent();
  studioAudio.playBlip(780, 0.025);
}

function renderLightboxContent() {
  const project = PROJECTS_DATA[activeLightbox.projectId];
  if (!project || !project.gallery) return;

  const currentItem = project.gallery[activeLightbox.index];
  const count = project.gallery.length;

  const lbImg = document.getElementById('lightbox-image');
  const lbTitle = document.getElementById('lightbox-project-title');
  const lbTag = document.getElementById('lightbox-tag');
  const lbCaption = document.getElementById('lightbox-caption');
  const lbCounter = document.getElementById('lightbox-counter');
  const lbThumbs = document.getElementById('lightbox-thumbnails');

  if (lbImg) {
    lbImg.style.opacity = '0';
    lbImg.style.transform = 'scale(0.97)';
    setTimeout(() => {
      lbImg.src = currentItem.src;
      lbImg.alt = currentItem.caption;
      lbImg.style.opacity = '1';
      lbImg.style.transform = 'scale(1)';
    }, 100);
  }

  if (lbTitle) lbTitle.textContent = `${project.title} • ${currentItem.title}`;
  if (lbTag) lbTag.textContent = `${currentItem.tag} • ${project.engine.toUpperCase()}`;
  if (lbCaption) lbCaption.textContent = currentItem.caption;
  if (lbCounter) lbCounter.textContent = `${activeLightbox.index + 1} / ${count}`;

  if (lbThumbs) {
    lbThumbs.innerHTML = project.gallery
      .map(
        (item, i) => `
      <button type="button" class="lightbox-thumb ${i === activeLightbox.index ? 'active' : ''}" 
              onclick="openLightbox('${project.id}', ${i})" 
              aria-label="View ${item.title}">
        <img src="${item.thumb}" alt="${item.title}" loading="lazy">
        <span class="lightbox-thumb-tag">${item.tag}</span>
      </button>
    `
      )
      .join('');
  }
}

function initLightboxListeners() {
  const lbModal = document.getElementById('lightbox-modal');
  if (lbModal) {
    lbModal.addEventListener('click', (e) => {
      if (e.target === lbModal || e.target.classList.contains('lightbox-backdrop')) {
        closeLightbox();
      }
    });

    // Touch Swipe for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;

    lbModal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lbModal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) {
        navigateLightbox(1);
      } else if (touchEndX > touchStartX + 50) {
        navigateLightbox(-1);
      }
    }, { passive: true });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!activeLightbox.projectId) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      navigateLightbox(1);
    } else if (e.key === 'ArrowLeft') {
      navigateLightbox(-1);
    }
  });
}

// ============================================================================
// 8. TOAST NOTIFICATION UTILITY
// ============================================================================
let toastTimeout = null;

function showToast(message) {
  const toast = document.getElementById('toast-notice');
  const msgElem = document.getElementById('toast-message');
  if (!toast || !msgElem) return;

  msgElem.textContent = message;
  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// Copy Email Action
function copyEmailToClipboard() {
  const email = 'sanjaisanakiyan007@gmail.com';
  navigator.clipboard.writeText(email).then(
    () => {
      studioAudio.playBlip(920, 0.06);
      showToast(`Copied: ${email}`);
    },
    () => {
      // Fallback
      prompt('Copy email:', email);
    }
  );
}

// ============================================================================
// 9. DIRECT CONTACT FORM HANDLER
// ============================================================================
function handleContactSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const subject = document.getElementById('contact-subject').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  const formattedSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - ${name}`);
  const formattedBody = encodeURIComponent(
    `Hello Sanjai,\n\n${message}\n\nFrom: ${name} (${email})`
  );

  studioAudio.playBlip(900, 0.08);
  showToast('Launching your email client...');

  window.location.href = `mailto:sanjaisanakiyan007@gmail.com?subject=${formattedSubject}&body=${formattedBody}`;
}

// ============================================================================
// 10. PROFILE CARD 3D TILT EFFECT
// ============================================================================
function initCardTilt() {
  const card = document.getElementById('profile-card-tilt');
  if (!card) return;

  const innerCard = card.querySelector('.profile-card');
  if (!innerCard) return;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = -(y / (rect.height / 2)) * 6;
    const rotY = (x / (rect.width / 2)) * 6;

    innerCard.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
  });

  card.addEventListener('mouseleave', () => {
    innerCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  });
}


// ============================================================================
// 11. GAMING HUD RETICLE CURSOR SYSTEM (#58D9FF)
// ============================================================================
function initGamingCursor() {
  // Mobile & Touch Device Protection: Do not show on touch-only devices (phones/tablets)
  const isTouchOnly = typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  if (isTouchOnly) {
    return;
  }

  // Find or create dedicated #game-cursor element
  let cursorEl = document.getElementById('game-cursor');
  if (!cursorEl) {
    cursorEl = document.createElement('div');
    cursorEl.id = 'game-cursor';
    cursorEl.className = 'is-hidden';
    cursorEl.setAttribute('aria-hidden', 'true');
    cursorEl.innerHTML = `
      <div class="cursor-ring"></div>
      <div class="cursor-dot"></div>
      <div class="cursor-arm cursor-top"></div>
      <div class="cursor-arm cursor-bottom"></div>
      <div class="cursor-arm cursor-left"></div>
      <div class="cursor-arm cursor-right"></div>
      <div class="cursor-label"></div>
    `;
    document.body.appendChild(cursorEl);
  }

  const labelEl = cursorEl.querySelector('.cursor-label');

  // Mouse coordinate state (centered around 44px box)
  let mouseX = -100;
  let mouseY = -100;
  let isVisible = false;
  let isClicking = false;
  let currentState = 'default';
  let currentLabel = '';

  function enableCustomCursor() {
    document.documentElement.classList.add('has-gaming-cursor');
    document.body.classList.add('has-gaming-cursor');
  }

  function disableCustomCursor() {
    document.documentElement.classList.remove('has-gaming-cursor');
    document.body.classList.remove('has-gaming-cursor');
  }

  // Pointer position update with minimal latency
  function onPointerMove(e) {
    if (e.pointerType && e.pointerType === 'touch') return;
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      enableCustomCursor();
      cursorEl.classList.remove('is-hidden');
    }
  }

  window.addEventListener('mousemove', onPointerMove, { passive: true });
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  document.addEventListener('mousemove', onPointerMove, { passive: true });
  document.addEventListener('pointermove', onPointerMove, { passive: true });

  // Viewport and focus boundaries
  document.addEventListener('mouseleave', () => {
    cursorEl.classList.add('is-hidden');
    isVisible = false;
  });

  document.addEventListener('mouseenter', (e) => {
    if (e && typeof e.clientX === 'number' && e.clientX >= 0) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    cursorEl.classList.remove('is-hidden');
    isVisible = true;
    enableCustomCursor();
  });

  window.addEventListener('blur', () => {
    cursorEl.classList.add('is-hidden');
    isVisible = false;
  });

  window.addEventListener('focus', () => {
    cursorEl.classList.remove('is-hidden');
    isVisible = true;
    enableCustomCursor();
  });

  // Touch listener: deactivate if touch is used
  window.addEventListener('touchstart', () => {
    disableCustomCursor();
    cursorEl.classList.add('is-hidden');
    isVisible = false;
  }, { passive: true });

  // Click animation: 200-240ms targeting pulse (TARGET LOCK -> CONFIRMED)
  window.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return; // Left click only
    isClicking = true;
    cursorEl.classList.add('is-clicking');

    setTimeout(() => {
      isClicking = false;
      cursorEl.classList.remove('is-clicking');
    }, 240);
  });

  // State switching helper
  function setCursorState(state, text = '') {
    if (state === currentState && text === currentLabel) return;

    cursorEl.classList.remove(
      'state-project',
      'state-case',
      'state-archive',
      'state-button',
      'state-text',
      'state-input'
    );

    if (state && state !== 'default') {
      cursorEl.classList.add(`state-${state}`);
    }

    currentState = state;
    currentLabel = text;

    if (labelEl) {
      labelEl.textContent = text;
    }
  }

  // Interactive element detection handler using event delegation
  function evaluateTarget(target) {
    if (!target || !(target instanceof Element)) {
      setCursorState('default');
      return;
    }

    // 1. Text Inputs & Form Fields (preserve text selection & caret)
    if (target.closest('input, textarea, select, [contenteditable="true"]')) {
      setCursorState('input', '');
      return;
    }

    // 2. Case Study buttons ("OPEN CASE")
    const caseBtn = target.closest(
      '.btn-view-project, [data-open-case], button[onclick*="openProjectModal"], a[onclick*="openProjectModal"], .project-quick-view-prompt'
    );
    if (caseBtn) {
      setCursorState('case', 'OPEN CASE');
      return;
    }

    // 3. Project Archive & Google Drive buttons ("ACCESS")
    const archiveBtn = target.closest(
      'a[href*="drive.google.com"], .btn-external-link, [title*="Archive" i], [aria-label*="Archive" i]'
    );
    if (archiveBtn) {
      setCursorState('archive', 'ACCESS');
      return;
    }

    // 3b. Experience Letter Card Link ("VIEW LETTER")
    const expCard = target.closest('.timeline-card-link, [href*="experience-letter"]');
    if (expCard) {
      setCursorState('button', 'VIEW LETTER');
      return;
    }

    // 4. Project Cards & Project Media Previews ("TARGET")
    const projectCard = target.closest(
      '.project-card-large, .project-card, .project-media-col, [data-project], [data-project-card], .project, .project-item'
    );
    if (projectCard) {
      const interactiveInside = target.closest('a, button, [role="button"]');
      if (!interactiveInside || interactiveInside === projectCard) {
        setCursorState('project', 'TARGET');
        return;
      }
    }

    // 5. Navigation Links & Brand Monogram
    const navItem = target.closest('.nav-link, .nav-cta-btn, .mobile-nav-link, .nav-brand, .footer-nav a');
    if (navItem) {
      if (navItem.classList.contains('nav-brand')) {
        setCursorState('button', 'HOME');
        return;
      }
      setCursorState('button', 'SELECT');
      return;
    }

    // 6. Generic Interactive Elements: Buttons, Tabs, Filters, Lightbox controls ("OPEN" / "SELECT")
    const interactive = target.closest(
      'button, a, [role="button"], .project-filter-btn, .skill-tab-btn, .modal-tab-btn, .modal-close-btn, .lightbox-control-btn, .lightbox-close-btn, .lightbox-nav-btn, .btn-audio-toggle, .btn-send-message, .hero-scroll-indicator, .clickable, [onclick]'
    );
    if (interactive) {
      let label = 'SELECT';
      if (interactive.classList.contains('project-filter-btn') || interactive.classList.contains('skill-tab-btn')) {
        label = 'SELECT';
      } else if (interactive.classList.contains('btn-primary-cinematic') || interactive.classList.contains('btn-secondary-cinematic')) {
        label = 'OPEN';
      } else if (interactive.classList.contains('modal-close-btn') || interactive.classList.contains('lightbox-close-btn')) {
        label = 'CLOSE';
      } else if (interactive.classList.contains('lightbox-nav-btn')) {
        label = interactive.classList.contains('prev') ? 'PREV' : 'NEXT';
      } else if (interactive.classList.contains('btn-audio-toggle')) {
        label = 'AUDIO';
      } else if (interactive.classList.contains('btn-send-message')) {
        label = 'TRANSMIT';
      } else if (interactive.classList.contains('hero-scroll-indicator')) {
        label = 'SCROLL';
      }
      setCursorState('button', label);
      return;
    }

    // 7. Interactive Highlight Cards & Steppers
    const cardItem = target.closest(
      '.about-highlight-card, .process-step-card, .skill-category-card, .skill-item'
    );
    if (cardItem) {
      setCursorState('button', 'SELECT');
      return;
    }

    // 8. Selectable reading text (dim reticle so text is easily readable)
    const textEl = target.closest(
      'p, .about-body-text, .section-subtitle, .project-description, .experience-overview, blockquote'
    );
    if (textEl && !target.closest('a, button, [role="button"]')) {
      setCursorState('text', '');
      return;
    }

    // Default Crosshair Reticle State (No text)
    setCursorState('default', '');
  }

  // Mouseover event delegation
  document.addEventListener('mouseover', (e) => {
    evaluateTarget(e.target);
  });

  // Re-evaluate element under cursor when page scrolls
  window.addEventListener('scroll', () => {
    if (isVisible && mouseX >= 0 && mouseY >= 0) {
      const el = document.elementFromPoint(mouseX, mouseY);
      if (el) evaluateTarget(el);
    }
  }, { passive: true });

  // GPU-accelerated RAF loop: center-anchored around mouse coordinates
  function render() {
    if (isVisible) {
      cursorEl.style.transform = `translate3d(${mouseX - 22}px, ${mouseY - 22}px, 0)`;
    }
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}
// ============================================================================
// 12. INITIALIZATION ON DOM READY
// ============================================================================
function initApp() {
  initGamingCursor();
  initAmbientCanvas();
  initNavigation();
  initSkillsFilter();
  initProjectsFilter();
  initModalTabs();
  initLightboxListeners();
  initCardTilt();
  
  // Experience letter card audio feedback
  const expLink = document.querySelector('.timeline-card-link');
  if (expLink) {
    expLink.addEventListener('click', () => {
      studioAudio.playBlip(800, 0.04);
    });
  }

  // Set current copyright year
  const yearElem = document.getElementById('current-year');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}