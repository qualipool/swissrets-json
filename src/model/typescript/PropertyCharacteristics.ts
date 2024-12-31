import { ApplicableType } from 'src/model/typescript/ApplicableType';

/**
 * Main characteristics of properties
 *
 * The cold facts, to represent the property or offer.
 */

export interface PropertyCharacteristics {
  /**
   * If there is a balcony (non ground floor outside area) this field would specify the area
   * in m²
   */
  areaBalcony?: number;
  /**
   * Living area in m²
   */
  areaBwf?: number;
  /**
   * Space allocated in cellar included within the offer in m²
   */
  areaCellar?: number;
  /**
   * Area dedicated to growing plants or a garden. To differentiate from something like a
   * Terrace. In m²
   */
  areaGarden?: number;
  /**
   * Usually refers to a covered not necessarily heated area with fresh air, but not opened up
   * to the outside.
   */
  areaLoggia?: number;
  /**
   * Net livin area in m²
   */
  areaNwf?: number;
  /**
   * Property land area in m²
   */
  areaPropertyLand?: number;
  /**
   * SIA-AFF area in m²
   */
  areaSiaAff?: number;
  /**
   * SIA-AGF area in m²
   */
  areaSiaAgf?: number;
  /**
   * SIA-AKF area in m²
   */
  areaSiaAkf?: number;
  /**
   * SIA-AKFN area in m²
   */
  areaSiaAkfn?: number;
  /**
   * SIA-AKFT area in m²
   */
  areaSiaAkft?: number;
  /**
   * SIA-ANF area in m²
   */
  areaSiaAnf?: number;
  /**
   * SIA-ANGF area in m²
   */
  areaSiaAngf?: number;
  /**
   * SIA-AVF area in m²
   */
  areaSiaAvf?: number;
  /**
   * SIA-BUF area in m²
   */
  areaSiaBuf?: number;
  /**
   * SIA-FF area in m²
   */
  areaSiaFf?: number;
  /**
   * SIA-GF area in m²
   */
  areaSiaGf?: number;
  /**
   * SIA-GGF area in m²
   */
  areaSiaGgf?: number;
  /**
   * SIA-GSF area in m²
   */
  areaSiaGsf?: number;
  /**
   * SIA-HNF area in m²
   */
  areaSiaHnf?: number;
  /**
   * SIA-KF area in m²
   */
  areaSiaKf?: number;
  /**
   * SIA-KFN area in m²
   */
  areaSiaKfn?: number;
  /**
   * SIA-KFT area in m²
   */
  areaSiaKft?: number;
  /**
   * SIA-NF area in m²
   */
  areaSiaNf?: number;
  /**
   * SIA-NGF area in m²
   */
  areaSiaNgf?: number;
  /**
   * SIA-NNF area in m²
   */
  areaSiaNnf?: number;
  /**
   * SIA-UF area in m²
   */
  areaSiaUf?: number;
  /**
   * SIA-UUF area in m²
   */
  areaSiaUuf?: number;
  /**
   * SIA-VF area in m²
   */
  areaSiaVf?: number;
  /**
   * Usually ground floor outside seating area in m²
   */
  areaTerrace?: number;
  /**
   * Pets are allowed or not tolerated.
   */
  arePetsAllowed?: ApplicableType;
  /**
   * Height of the rooms in m.
   */
  ceilingHeight?: number;
  /**
   * Carrying capacity for crane in kg.
   */
  craneCapacity?: number;
  /**
   * Maximum elevator load in kg.
   */
  elevatorLoad?: number;
  /**
   * Floor number, ground floor is 0, basement floors are negative.
   */
  floor?: number;
  /**
   * Maximum floor load in kg/m²
   */
  floorLoad?: number;
  /**
   * A gross premium is the total premium of an insurance contract before brokerage or
   * discounts have been deducted, in percent.
   */
  grossPremium?: number;
  /**
   * Hall height in m, usually for commercial properties.
   */
  hallHeight?: number;
  /**
   * Has an attic.
   */
  hasAttic?: ApplicableType;
  /**
   * Balcony available.
   */
  hasBalcony?: ApplicableType;
  /**
   * Restrictions for modifications apply, like monument protection and similar.
   */
  hasBuildingLawRestrictions?: ApplicableType;
  /**
   * Availability of cable tv.
   */
  hasCableTv?: ApplicableType;
  /**
   * A covered structure used to offer limited protection from rain and snow, for one car.
   */
  hasCarPort?: ApplicableType;
  /**
   * A covered structure used to offer limited protection from rain and snow, for two cars.
   */
  hasCarPortDouble?: ApplicableType;
  /**
   * Availability of a cellar.
   */
  hasCellar?: ApplicableType;
  /**
   * Whether or not a charging station for e-Cars is provided.
   */
  hasChargingStation?: ApplicableType;
  /**
   * States if the land is fully developed and ready being built on it.
   */
  hasConnectedBuildingLand?: ApplicableType;
  /**
   * Used for building land, states if there is some demolition property on it (or pieces of
   * it).
   */
  hasDemolitionProperty?: ApplicableType;
  /**
   * Availability of a dishwasher.
   */
  hasDishwasher?: ApplicableType;
  /**
   * Availability of an elevator.
   */
  hasElevator?: ApplicableType;
  /**
   * A charging station for e-Cars is provided.
   */
  hasEvChargingStation?: ApplicableType;
  /**
   * Availability of a fiber optic connection.
   */
  hasFiberOptic?: ApplicableType;
  /**
   * Includes a framed opening to hold an open fire, indoors.
   */
  hasFireplace?: ApplicableType;
  /**
   * Whether or not there is a residential community, sharing the living space.
   */
  hasFlatSharingCommunity?: ApplicableType;
  /**
   * Widely used to control the amount of foreigners buying holiday flats in popular regions.
   */
  hasForeignQuota?: ApplicableType;
  /**
   * A shelter for one car.
   */
  hasGarage?: ApplicableType;
  /**
   * A shelter for two cars.
   */
  hasGarageDouble?: ApplicableType;
  /**
   * Subterranean garage for cars.
   */
  hasGarageUnderground?: ApplicableType;
  /**
   * A small building for storing garden tools, bicycles, and other equipment.
   */
  hasGardenShed?: ApplicableType;
  /**
   * Direct visibility of a lake.
   */
  hasLakeView?: ApplicableType;
  /**
   * Provides vertical transportation between building floors, levels or decks, and are
   * commonly found in offices, public buildings and other types of multi-story accommodation.
   */
  hasLiftingPlatform?: ApplicableType;
  /**
   * Direct visibility of mountains.
   */
  hasMountainView?: ApplicableType;
  /**
   * Has multimedia wiring.
   */
  hasMultimediaWiring?: ApplicableType;
  /**
   * Has a lovely view, usually from the balcony or the living room.
   */
  hasNiceView?: ApplicableType;
  /**
   * An uncovered space for one car or more cars.
   */
  hasParking?: ApplicableType;
  /**
   * Whether or not a photovoltaic system is provided.
   */
  hasPhotovoltaic?: ApplicableType;
  /**
   * Has a playground for children nearby.
   */
  hasPlayground?: ApplicableType;
  /**
   * A sloping floor, walk, or roadway leading from one level to another, usually to make a
   * place accessible for wheels.
   */
  hasRamp?: ApplicableType;
  /**
   * Indicates that prospects can visit the property virtually (e.g. with a video-call or
   * guided virtual-tour hosted by the real estate agent)
   */
  hasRemoteViewings?: ApplicableType;
  /**
   * Has a steamer.
   */
  hasSteamer?: ApplicableType;
  /**
   * Storeroom, stowage room.
   */
  hasStoreRoom?: ApplicableType;
  /**
   * Availability of a gas connection, usually for heating and cooking.
   */
  hasSupplyGas?: ApplicableType;
  /**
   * A connection to the public electric grid.
   */
  hasSupplyPower?: ApplicableType;
  /**
   * A connection to the public waste water system.
   */
  hasSupplySewage?: ApplicableType;
  /**
   * A connection to the public water supply.
   */
  hasSupplyWater?: ApplicableType;
  /**
   * Personal swimming pool.
   */
  hasSwimmingPool?: ApplicableType;
  /**
   * Whether or not a thermal solar collector system is provided.
   */
  hasThermalSolarCollector?: ApplicableType;
  /**
   * A masonry heater or ceramic stove, is a device for warming an interior space usually fed
   * with wood.
   */
  hasTiledStove?: ApplicableType;
  /**
   * Dryer for clothes after washing them.
   */
  hasTumbleDryer?: ApplicableType;
  /**
   * For washing clothes and other cloth.
   */
  hasWashingMachine?: ApplicableType;
  /**
   * Suitable for families.
   */
  isChildFriendly?: ApplicableType;
  /**
   * A house situated on the corner of two streets.
   */
  isCornerHouse?: ApplicableType;
  /**
   * If it's a tear-down property or a site of demolished structures.
   */
  isDemolitionProperty?: ApplicableType;
  /**
   * Old and in poor condition, in a state of decay.
   */
  isDilapidated?: ApplicableType;
  /**
   * No one used the flat or the building before, since it was built or heavily renovated from
   * ground up.
   */
  isFirstOccupancy?: ApplicableType;
  /**
   * Nearly on a level with the ground.
   */
  isGroundFloor?: ApplicableType;
  /**
   * Half of a stair elevated story, in a building.
   */
  isGroundFloorRaised?: ApplicableType;
  /**
   * Preparation for demolition or a part-demolition, all contaminants, doors, windows, floors
   * and non-load bearing walls were removed.
   */
  isGutted?: ApplicableType;
  /**
   * Needs to be renewed in order to be fully usable again.
   */
  isInNeedOfRenovation?: ApplicableType;
  /**
   * Needs to be renewed partially in order to be fully usable again.
   */
  isInNeedOfRenovationPartially?: ApplicableType;
  /**
   * Used, but as good as new.
   */
  isLikeNew?: ApplicableType;
  /**
   * Situated between two other houses or buildings.
   */
  isMiddleHouse?: ApplicableType;
  /**
   * Modernized means improved, things like a better insulated roof and walls, modern heating
   * system and similar improvements.
   */
  isModernized?: ApplicableType;
  /**
   * Newly built house or building.
   */
  isNewConstruction?: ApplicableType;
  /**
   * Refers to the construction method used until 60-80 years ago.
   */
  isOldBuilding?: ApplicableType;
  /**
   * Planned for the future.
   */
  isProjection?: ApplicableType;
  /**
   * Part of a quiet surrounding or neighbourhood.
   */
  isQuiet?: ApplicableType;
  /**
   * Fully renovated, neat, clean and restored.
   */
  isRefurbished?: ApplicableType;
  /**
   * Partially renovated or restored.
   */
  isRefurbishedPartially?: ApplicableType;
  /**
   * Where a person lives part time or less than the majority of the calendar year, typically
   * a holiday flat, some laws and landlords do not allow this.
   */
  isSecondaryResidenceAllowed?: ApplicableType;
  /**
   * Intentionally missing interior finish in order to allow customization.
   */
  isShellConstruction?: ApplicableType;
  /**
   * Smoking allowed inside.
   */
  isSmokingAllowed?: ApplicableType;
  /**
   * Sunny surroundings, nor trees, mountains or other buildings do shadow.
   */
  isSunny?: ApplicableType;
  /**
   * Is of temporary use.
   */
  isTemporaryUse?: ApplicableType;
  /**
   * Mainly used for parking slots.
   */
  isUnderRoof?: ApplicableType;
  /**
   * Properly looked after.
   */
  isWellTended?: ApplicableType;
  /**
   * All aspects are accessible for wheelchair users.
   */
  isWheelchairAccessible?: ApplicableType;
  /**
   * Number of apartments contained.
   */
  numberOfApartements?: number;
  /**
   * Number of bathrooms.
   */
  numberOfBathrooms?: number;
  /**
   * Total amount of floors.
   */
  numberOfFloors?: number;
  /**
   * Number of parcels.
   */
  numberOfParcels?: number;
  /**
   * Total number of rooms.
   */
  numberOfRooms?: number;
  /**
   * The number of showers
   */
  numberOfShowers?: number;
  /**
   * The number of toilets
   */
  numberOfToilets?: number;
  /**
   * The number of guest and additional toilets
   */
  numberOfToiletsGuest?: number;
  /**
   * Built on even grounds.
   */
  onEvenGround?: ApplicableType;
  /**
   * Built on a sloping hillside.
   */
  onHillside?: ApplicableType;
  /**
   * Built on a sloping hillside towards the south.
   */
  onHillsideSouth?: ApplicableType;
  /**
   * Plot area built on, the ratio between plot area and gross floor area.
   */
  utilizationRatio?: number;
  /**
   * Plot area to be built on, the ratio between plot area and gross floor area.
   */
  utilizationRatioConstruction?: number;
  /**
   * Building volume in m³
   */
  volumeGva?: number;
  /**
   * DEPRICATED! please use volumeSia116Gv instead
   */
  volumeSia?: number;
  /**
   * olume SIA in m³ – Older Standard (SIA 116) with the Abbreviation 'GV'. This is still in
   * use specifically for legacy properties.
   */
  volumeSia116Gv?: number;
  /**
   * Volume SIA-AFV in m³
   */
  volumeSiaAfv?: number;
  /**
   * Volume SIA-AKV in m³
   */
  volumeSiaAkv?: number;
  /**
   * Volume SIA-ANGV in m³
   */
  volumeSiaAngv?: number;
  /**
   * Volume SIA-ANV in m³
   */
  volumeSiaAnv?: number;
  /**
   * Volume SIA-AVV in m³
   */
  volumeSiaAvv?: number;
  /**
   * Volume SIA-GV in m³
   */
  volumeSiaGv?: number;
  /**
   * Year of construction, in four digits.
   */
  yearBuilt?: number;
  /**
   * Year of last renovation, in four digits.
   */
  yearLastRenovated?: number;
}
