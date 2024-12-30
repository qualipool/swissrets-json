/**
 * Pets are allowed or not tolerated.
 *
 * Applicable can have three states, unknown must be treated as default.
 *
 * Has an attic.
 *
 * Balcony available.
 *
 * Restrictions for modifications apply, like monument protection and similar.
 *
 * Availability of cable tv.
 *
 * A covered structure used to offer limited protection from rain and snow, for one car.
 *
 * A covered structure used to offer limited protection from rain and snow, for two cars.
 *
 * Availability of a cellar.
 *
 * Whether or not a charging station for e-Cars is provided.
 *
 * States if the land is fully developed and ready being built on it.
 *
 * Used for building land, states if there is some demolition property on it (or pieces of
 * it).
 *
 * Availability of a dishwasher.
 *
 * Availability of an elevator.
 *
 * A charging station for e-Cars is provided.
 *
 * Availability of a fiber optic connection.
 *
 * Includes a framed opening to hold an open fire, indoors.
 *
 * Whether or not there is a residential community, sharing the living space.
 *
 * Widely used to control the amount of foreigners buying holiday flats in popular regions.
 *
 * A shelter for one car.
 *
 * A shelter for two cars.
 *
 * Subterranean garage for cars.
 *
 * A small building for storing garden tools, bicycles, and other equipment.
 *
 * Direct visibility of a lake.
 *
 * Provides vertical transportation between building floors, levels or decks, and are
 * commonly found in offices, public buildings and other types of multi-story
 * accommodation.
 *
 * Direct visibility of mountains.
 *
 * Has multimedia wiring.
 *
 * Has a lovely view, usually from the balcony or the living room.
 *
 * An uncovered space for one car or more cars.
 *
 * Whether or not a photovoltaic system is provided.
 *
 * Has a playground for children nearby.
 *
 * A sloping floor, walk, or roadway leading from one level to another, usually to make a
 * place accessible for wheels.
 *
 * Indicates that prospects can visit the property virtually (e.g. with a video-call or
 * guided virtual-tour hosted by the real estate agent)
 *
 * Has a steamer.
 *
 * Storeroom, stowage room.
 *
 * Availability of a gas connection, usually for heating and cooking.
 *
 * A connection to the public electric grid.
 *
 * A connection to the public waste water system.
 *
 * A connection to the public water supply.
 *
 * Personal swimming pool.
 *
 * Whether or not a thermal solar collector system is provided.
 *
 * A masonry heater or ceramic stove, is a device for warming an interior space usually fed
 * with wood.
 *
 * Dryer for clothes after washing them.
 *
 * For washing clothes and other cloth.
 *
 * Suitable for families.
 *
 * A house situated on the corner of two streets.
 *
 * If it's a tear-down property or a site of demolished structures.
 *
 * Old and in poor condition, in a state of decay.
 *
 * No one used the flat or the building before, since it was built or heavily renovated from
 * ground up.
 *
 * Nearly on a level with the ground.
 *
 * Half of a stair elevated story, in a building.
 *
 * Preparation for demolition or a part-demolition, all contaminants, doors, windows, floors
 * and non-load bearing walls were removed.
 *
 * Needs to be renewed in order to be fully usable again.
 *
 * Needs to be renewed partially in order to be fully usable again.
 *
 * Used, but as good as new.
 *
 * Situated between two other houses or buildings.
 *
 * Modernized means improved, things like a better insulated roof and walls, modern heating
 * system and similar improvements.
 *
 * Newly built house or building.
 *
 * Refers to the construction method used until 60-80 years ago.
 *
 * Planned for the future.
 *
 * Part of a quiet surrounding or neighbourhood.
 *
 * Fully renovated, neat, clean and restored.
 *
 * Partially renovated or restored.
 *
 * Where a person lives part time or less than the majority of the calendar year, typically
 * a holiday flat, some laws and landlords do not allow this.
 *
 * Intentionally missing interior finish in order to allow customization.
 *
 * Smoking allowed inside.
 *
 * Sunny surroundings, nor trees, mountains or other buildings do shadow.
 *
 * Is of temporary use.
 *
 * Mainly used for parking slots.
 *
 * Properly looked after.
 *
 * All aspects are accessible for wheelchair users.
 *
 * Built on even grounds.
 *
 * Built on a sloping hillside.
 *
 * Built on a sloping hillside towards the south.
 */

export enum ApplicableType {
  Applies = 'applies',
  DoesNotApply = 'does-not-apply',
  Unknown = 'unknown'
}
