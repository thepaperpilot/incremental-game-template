import {CustomRequirement} from "@/ig-template/tools/requirements/CustomRequirement";
import Decimal from "@/lib/break_eternity.min";


describe('Custom Requirement', () => {

    test('custom requirement always true', () => {
        // Arrange
        const alwaysTrue = new CustomRequirement("Always true", () => 1, () => 1);

        // Act
        const isCompleted = alwaysTrue.isCompleted;
        const progress = alwaysTrue.progress;

        // Assert
        expect(isCompleted).toBeTruthy();
        expect(progress.actual).toEqual(new Decimal(1));
        expect(progress.target).toEqual(new Decimal(1));
        expect(alwaysTrue.hint).toBe("Always true");
    });

    test('custom requirement always false', () => {
        // Arrange
        const alwaysFalse = new CustomRequirement("Always false", () => 0, () => 1);

        // Act
        const isCompleted = alwaysFalse.isCompleted;
        const progress = alwaysFalse.progress;

        // Assert
        expect(isCompleted).toBeFalsy();
        expect(progress.actual).toEqual(new Decimal(0));
        expect(progress.target).toEqual(new Decimal(1));
    });


});
