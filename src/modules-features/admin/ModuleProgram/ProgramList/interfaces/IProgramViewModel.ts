export default interface IProgramViewModel {
  id?: number;
  code?: string | null;
  name?: string | null;
  startYear?: number | null;
  standardDuration?: number | null;
  managingFaculty?: string | null;
  educationLevel?: string | null;
  educationType?: string | null;
  firstGraduatedYear?: number | null;
  note?: string | null;
}
