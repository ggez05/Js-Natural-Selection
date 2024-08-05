# Natural Selection Simulator

Welcome to the **Natural Selection Simulator**! This project is a simple simulation of natural selection using HTML5 Canvas. Watch as green dots (males) and pink dots (females) attempt to survive and reproduce while avoiding a deadly red dot (predator). With each generation, the targets evolve and develop better strategies to evade the predator.

![image](https://github.com/user-attachments/assets/99175a9d-251f-493e-9765-4c10532de1da)

## Features

- **Simulated Evolution**: Targets exhibit natural selection behaviors, improving their survival tactics over generations.
- **Dynamic Environment**: Randomly generated predators and targets, each with unique characteristics.
- **Real-Time Visualization**: Watch the simulation unfold on the canvas with smooth animations.
- **Interactive**: Click on the canvas to add new targets to the environment.
- **Statistics Tracking**: Real-time data display of the genetic attributes and properties of the targets.

## How It Works

### Core Components

1. **Targets**:

   - Represented as green (male) and pink (female) dots.
   - Each target has genetic attributes that influence its movement and ability to evade predators.

2. **Predators**:

   - Represented as red dots (bullets).
   - Move randomly and eliminate any target they come into contact with.

3. **Mating**:
   - Male and female targets can mate if they are close enough and certain conditions are met.
   - Offspring inherit averaged genetic attributes from their parents, potentially leading to better evasion capabilities.

### Technical Overview

- **HTML5 Canvas**: The core visualization is rendered using the HTML5 Canvas API.
- **JavaScript**: Handles the simulation logic, including movement, collision detection, and genetic inheritance.
- **jQuery**: Used for DOM manipulation and event handling.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/natural-selection-simulator.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd natural-selection-simulator
   ```

3. **Open the project**:
   Open `index.html` in your favorite web browser.

## Usage

- **Start the Simulation**: The simulation begins automatically upon opening the `index.html` file.
- **Add New Targets**: Click on the canvas to introduce new targets into the environment.
- **Observe and Analyze**: Watch how the targets evolve over time and how their genetic attributes affect their survival.

## Customization

You can customize various aspects of the simulation:

- **Predator Speed and Behavior**: Adjust the initial velocity and movement patterns of the predators.
- **Target Genetics**: Modify the parameters that define genetic traits, such as evasion speed and mating frequency.
- **Simulation Parameters**: Tweak settings like maximum population size and mutation rates.

## Contributing

Contributions are welcome! If you'd like to add features, improve the simulation, or fix bugs, please fork the repository and submit a pull request.


