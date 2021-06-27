import { isParentOf } from './isParentOf'

export function isSameOrContains(container: Element, child: Element) {
	return container === child || isParentOf(container, child)
}
